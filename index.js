const connectToDb = require("./db");
const {
  createTask,
  getAllTasks,
  getTasksByPriority,
  getLowCompletedTasks,
  getCompletedTasks,
  getOverdueTasks,
  getTaskByTitle,
  getTasksByTag,
  updateTaskById,
  deleteTaskById,
  getMediumPriorityNotCompletedTasks,
  getHighPriorityDueTodayTasks,
} = require("./controllers");

connectToDb();

// const task = createTask({
//   title: "Buy groceries",
//   description: "Milk, Eggs, Bread",
//   dueDate: new Date(Date.now() + 86400000),
//   priority: "Low",
//   tags: ["personal", "shopping"],
// });
//getAllTasks();
//getTasksByPriority("Low");
// getLowCompletedTasks();
// getCompletedTasks();
// getOverdueTasks();
// getTaskByTitle("Submit project proposal");
// getTasksByTag(["work", "proposal"]);
// updateTaskById("67f7b5aaeb5a204b0eebda33", { priority: "High" });
// deleteTaskById("67f7b5aaeb5a204b0eebda33");
// getMediumPriorityNotCompletedTasks();
getHighPriorityDueTodayTasks();
