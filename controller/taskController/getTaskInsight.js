import Task from "../../model/task.js";
import mongoose from "mongoose";

export const getTaskInsight = async (req, res) => {
  try {
    const userId = req.user.id; 
    const { range } = req.query;
    let startDate = new Date();
    switch (range) {
      case "day":
        startDate.setDate(startDate.getDate() - 1);
        break;
      case "week":
        startDate.setDate(startDate.getDate() - 7);
        break;
      case "month":
        startDate.setMonth(startDate.getMonth() - 1);
        break;
      case "year":
        startDate.setFullYear(startDate.getFullYear() - 1);
        break;
      default:
        return res.status(400).json({ message: "Invalid range parameter" });
    }
    const stats = await Task.aggregate([
      {
        $match: {
          user: new mongoose.Types.ObjectId(userId),
          createdAt: { $gte: startDate },
        },
      },
      {
        $group: {
          _id: "$completed",
          count: { $sum: 1 },
        },
      },
    ]);
    const totalTasks = await Task.countDocuments({
      user: new mongoose.Types.ObjectId(userId),
      createdAt: { $gte: startDate },
    });

    const completedCount = stats.find((s) => s._id === true)?.count || 0;
    const pendingCount = stats.find((s) => s._id === false)?.count || 0;

    return res.status(200).json({
      message: "Task insights fetched successfully",
      range,
      stats: {
        total: totalTasks,
        completed: completedCount,
        pending: pendingCount,
      },
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
