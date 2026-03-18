import User from "../../model/user.js";
import authMiddleware from "../../middleware/authMiddleware.js";

const deleteUser = async (req, res) => {
  const userid = req.user._id;
  const deleteUser = await User.findByIdAndDelete(userid);
  return res
    .status(200)
    .json({ message: ` Requested User ${userid} deleted ` });
};

export default deleteUser;
