import User from "../../model/user.js";

export const updateUserDetail = async (req, res) => {
  try {
    const userId = req.user._id;
    const updates = req.body;
    const updateUser = await User.findByIdAndUpdate(userId, updates, {
      returnDocument: "after",
    });
    return res.status(200).json({ updateUser });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
