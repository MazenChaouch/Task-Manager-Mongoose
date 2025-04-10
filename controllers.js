const Task = require("./task");

const createTask = async (newTask) => {
  try {
    const task = await Task.create(newTask);
    console.log(task);
    return task;
  } catch (error) {
    console.error(error.messange);
  }
};

const getAllTasks = async () => {
  try {
    const tasks = await Task.find();
    console.log(tasks);
    return tasks;
  } catch (error) {
    console.error(error.messange);
  }
};

const getTasksByPriority = async (priority) => {
  try {
    const tasks = await Task.find({ priority });
    console.log(tasks);
    return tasks;
  } catch (error) {
    console.error(error.messange);
  }
};

const getLowCompletedTasks = async () => {
  try {
    const tasks = await Task.find({ priority: "Low", isCompleted: true }).limit(
      5,
    );
    console.log(tasks);
    return tasks;
  } catch (error) {
    console.error(error.messange);
  }
};

const getCompletedTasks = async () => {
  try {
    const tasks = await Task.find({ isCompleted: true });
    console.log(tasks);
    return tasks;
  } catch (error) {
    console.error(error.messange);
  }
};

const getOverdueTasks = async () => {
  try {
    const tasks = await Task.where("dueDate")
      .lt(new Date())
      .where("isCompleted")
      .equals(false);
    console.log(tasks);
    return tasks;
  } catch (error) {
    console.error(error.messange);
  }
};
const getTaskByTitle = async (title) => {
  try {
    const task = await Task.findOne({ title });
    console.log(task);
    return task;
  } catch (error) {
    console.error(error.messange);
  }
};

const getTasksByTag = async (tags) => {
  try {
    const task = await Task.find({ tags });
    console.log(task);
    return task;
  } catch (error) {
    console.error(error.messange);
  }
};

const updateTaskById = async (id, t) => {
  try {
    const task = await Task.findByIdAndUpdate(id, t);
    console.log(task);
    return task;
  } catch (error) {
    console.error(error.messange);
  }
};

const deleteTaskById = async (id) => {
  try {
    const task = await Task.findOneAndDelete({ id });
    console.log(task);
    return task;
  } catch (error) {
    console.error(error.messange);
  }
};

const getMediumPriorityNotCompletedTasks = async () => {
  try {
    const tasks = await Task.find({ priority: "Medium", isCompleted: false });
    console.log(tasks);
    return tasks;
  } catch (error) {
    console.error(error.messange);
  }
};

const getHighPriorityDueTodayTasks = async () => {
  const today = new Date(); // 12/04/2025 00:00:00:0000
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(); // 12/04/2025 23:59:59:999
  tomorrow.setHours(23, 59, 59, 999);
  try {
    const tasks = await Task.where("priority")
      .equals("High")
      .where("dueDate")
      .gte(today)
      .lte(tomorrow)
      .where("title")
      .regex(/urgent/i);
    console.log(tasks);
    return tasks;
  } catch (error) {
    console.error(error.messange);
  }
};
module.exports = {
  createTask,
  deleteTaskById,
  getAllTasks,
  getCompletedTasks,
  getHighPriorityDueTodayTasks,
  getLowCompletedTasks,
  getMediumPriorityNotCompletedTasks,
  getOverdueTasks,
  getTasksByTag,
  getTaskByTitle,
  getTasksByPriority,
  updateTaskById,
};
