import Task from "../../model/task.js";

const updateTask = async (req, res) => {
  try {
    const taskid = req.params.id;
    const updatetask = await Task.findByIdAndUpdate(
      taskid,
      { completed: true },
      { returnDocument: "after" },
    );
    if (!updatetask) {
      return res.status(404).json({ message: `TaskId ${taskid} not found` });
    }
    return res
      .status(200)
      .json({ message: ` TaskId ${taskid} updated successfully`, updatetask });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export default updateTask;
