const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
  title: { type: String, required: true, minLength: 3, maxLength: 100 },
  description: { type: String, optional: true, maxLength: 500 },
  dueDate: {
    type: Date,
    required: true,
    validate: {
      validator: (date) => date > new Date(),
      message: "DueDate must be future date!",
    },
  },
  priority: {
    type: String,
    enum: ["Low", "Medium", "High"],
    default: "Medium",
  },
  isCompleted: { type: Boolean, default: false },
  tags: {
    type: [{ type: String, lowercase: true }],
    optional: true,
  },
  createdAt: { type: Date, default: new Date() },
});
taskSchema.virtual("isOverdue").get(function () {
  return this.dueDate < new Date() && this.isCompleted == false;
});

taskSchema.statics.getUrgentTasks = function () {
  const tasks = this.where("priority")
    .equals("High")
    .where("isCompleted")
    .equals(false);
  return tasks;
};

taskSchema.pre("save", function (next) {
  console.log(`Saving task: ${this.title}`);
  next();
});
taskSchema.post("findOneAndDelete", function (doc) {
  console.log(`task deleted!`);
});
const Task = model("tasks", taskSchema);

module.exports = Task;
