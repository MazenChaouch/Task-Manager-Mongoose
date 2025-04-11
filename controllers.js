const Task = require("./task");

const createTask = async (newTask) => {
  try {
    const task = await Task.create(newTask);
    return task;
  } catch (error) {
    throw new Error(error);
  }
};

const getAllTasks = async () => {
  try {
    const tasks = await Task.find();
    return tasks;
  } catch (error) {
    throw new Error(error);
  }
};
const getTaskById = async (id) => {
  try {
    const task = await Task.findById(id);
    if (!task) throw new Error("Task not found");
    else return task;
  } catch (error) {
    throw new Error(error);
  }
};
const getTasksByPriority = async (priority) => {
  try {
    const tasks = await Task.find({ priority });
    return tasks;
  } catch (error) {
    throw new Error(error);
  }
};

const getLowCompletedTasks = async () => {
  try {
    const tasks = await Task.find({ priority: "Low", isCompleted: true }).limit(
      5,
    );
    return tasks;
  } catch (error) {
    throw new Error(error);
  }
};

const getCompletedTasks = async () => {
  try {
    const tasks = await Task.find({ isCompleted: true });
    return tasks;
  } catch (error) {
    throw new Error(error.message);
  }
};
const getOverdueTasks = async () => {
  try {
    const tasks = await Task.where("dueDate")
      .lt(new Date())
      .where("isCompleted")
      .equals(false);
    return tasks;
  } catch (error) {
    throw new Error(error);
  }
};
const getTaskByTitle = async (title) => {
  try {
    const task = await Task.findOne({ title });

    return task;
  } catch (error) {
    throw new Error(error);
  }
};
const getTasksByTitle = async (title) => {
  try {
    const task = await Task.where("title").regex(/urgent/i);
    return task;
  } catch (error) {
    throw new Error(error);
  }
};

const getTasksByTag = async (tags) => {
  try {
    const task = await Task.find({ tags });
    return task;
  } catch (error) {
    throw new Error(error);
  }
};

const updateTaskById = async (id, t) => {
  try {
    const task = await Task.findByIdAndUpdate(id, t, { new: true });
    if (!task) return "Task not found";
    else return task;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteTaskById = async (_id) => {
  try {
    const task = await Task.findOneAndDelete({ _id });
    console.log(task);
    return task;
  } catch (error) {
    throw new Error(error);
  }
};

const getMediumPriorityNotCompletedTasks = async () => {
  try {
    const tasks = await Task.find({ priority: "Medium", isCompleted: false });
    return tasks;
  } catch (error) {
    throw new Error(error);
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
    return tasks;
  } catch (error) {
    throw new Error(error);
  }
};
module.exports = {
  createTask,
  deleteTaskById,
  getAllTasks,
  getTaskById,
  getCompletedTasks,
  getHighPriorityDueTodayTasks,
  getLowCompletedTasks,
  getMediumPriorityNotCompletedTasks,
  getOverdueTasks,
  getTasksByTag,
  getTaskByTitle,
  getTasksByTitle,
  getTasksByPriority,
  updateTaskById,
};
