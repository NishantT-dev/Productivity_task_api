import jwt from "jsonwebtoken";
import User from "../../model/user.js";
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SEC, {
      expiresIn: "1h",
    });

    res.status(201).json({
      message: "User registered successfully",
      token,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export { registerUser };
