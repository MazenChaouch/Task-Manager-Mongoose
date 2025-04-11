const express = require("express");
const connectToDb = require("./db");
const {
  createTask,
  getAllTasks,
  getTaskById,
  getTasksByPriority,
  getLowCompletedTasks,
  getCompletedTasks,
  getOverdueTasks,
  getTasksByTitle,
  getTasksByTag,
  updateTaskById,
  deleteTaskById,
  getHighPriorityDueTodayTasks,
} = require("./controllers");

const app = express();
app.use(express.json());

// get All Tasks
app.get("/api/tasks", async (req, res) => {
  await getAllTasks()
    .then((tasks) => res.status(200).json(tasks))
    .catch((err) => res.statut(400).send(err.message));
});

// get Tasks with priority high
app.get("/api/tasks/priority/high", async (req, res) => {
  await getTasksByPriority("High").then((tasks) => res.status(200).json(tasks));
});

//get completed tasks
app.get("/api/tasks/completed", async (req, res) => {
  await getCompletedTasks()
    .then((tasks) => res.status(200).json(tasks))
    .catch((err) => res.status(400).send(err));
});

// create task
app.post("/api/tasks", async (req, res) => {
  const task = req.body;
  await createTask(task)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => res.send(err.message));
});

// get overdue tasks
app.get("/api/tasks/overdue", async (req, res) => {
  await getOverdueTasks()
    .then((tasks) => res.status(200).json(tasks))
    .catch((err) => res.status(400).send(err.message));
});

// get tasks with  meeting tag
app.get("/api/tasks/tag/meeting", async (req, res) => {
  await getTasksByTag("meeting")
    .then((tasks) => res.status(200).json(tasks))
    .catch((err) => res.status(400).send(err.message));
});

// get urgent tasks
app.get("/api/tasks/urgent", async (req, res) => {
  await getTasksByTitle("urgent")
    .then((tasks) => res.status(200).json(tasks))
    .catch((err) => res.status(400).send(err.message));
});

//get low completed tasks
app.get("/api/tasks/low-completed", async (req, res) => {
  await getLowCompletedTasks()
    .then((tasks) => res.status(200).json(tasks))
    .catch((err) => res.status(400).send(err.message));
});

// get high today urgent
app.get("/api/tasks/high-today-urgent", async (req, res) => {
  await getHighPriorityDueTodayTasks()
    .then((tasks) => res.status(200).json(tasks))
    .catch((err) => res.status(400).send(err.message));
});

// get task
app.get("/api/tasks/:id", async (req, res) => {
  await getTaskById(req.params.id)
    .then((task) => res.status(200).json(task))
    .catch(() => res.status(400).send("something went worng"));
});

// update task
app.put("/api/tasks/:id", async (req, res) => {
  const task = req.body;
  await updateTaskById(req.params.id, task).then((task) =>
    res.status(200).send(task),
  );
});

// delete task
app.delete("/api/tasks/:id", async (req, res) => {
  await deleteTaskById(req.params.id)
    .then(() => res.status(200).send("deleted"))
    .catch((err) => res.status(400).send(err));
});

connectToDb();
app.listen(8000, () => {
  console.log("server is running on http://localhost:8000");
});
