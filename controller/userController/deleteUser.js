import User from "../../model/user.js";
import authMiddleware from "../../middleware/authMiddleware.js";

const deleteUser = async (req, res) => {
 try{ const userid = req.user._id;
  const deleteUser = await User.findByIdAndDelete(userid);
  return res
    .status(200)
    .json({ message: ` Requested User ${userid} deleted ` });

  } catch(err){
return res.status(500).json({message:err.message})
  }
}
export default deleteUser;
