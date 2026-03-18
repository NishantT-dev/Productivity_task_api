import authMiddleware from "../../middleware/authMiddleware.js";
import Task from "../../model/task.js";

const createTask = async (req, res) => {
  try {
    const { title, description, completed } = req.body;
    const userid = req.user._id;
    const createTask = await Task.create({
      user: userid,
      title,
      description,
      completed,
    });

    return res
      .status(201)
      .json({
        message: `Task of Userid:- ${userid} created successfully`,
        createTask,
      });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
export default createTask;
