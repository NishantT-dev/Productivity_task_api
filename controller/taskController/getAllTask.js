import mongoose from "mongoose";
import Task from "../../model/task.js";

const getAllTask = async (req, res) => {
  try {
    const userId = req.user.id;

    const filter = { user: new mongoose.Types.ObjectId(userId) };

    if (req.query.completed !== undefined) {
      filter.completed = req.query.completed === "true";
    }

    const tasks = await Task.find(filter);

    if (!tasks || tasks.length === 0) {
      return res.status(404).json({ message: "No tasks found for this user" });
    }

    return res.status(200).json({
      message: "Tasks fetched successfully",
      tasks,
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export default getAllTask;
