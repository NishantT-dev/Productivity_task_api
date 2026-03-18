import jwt from "jsonwebtoken";
import User from "../../model/user.js";
import bcrypt from "bcryptjs";

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(400).json({ message: "User not exists" });
    }
    const paswordMatch = await bcrypt.compare(password, user.password);
    if (!paswordMatch) res.status(400).json({ message: "Invalid Credentials" });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SEC, {
      expiresIn: "1h",
    });
    res.status(200).json({ message: " USER LOGIN SUCCESSFUL ", token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export { loginUser };
