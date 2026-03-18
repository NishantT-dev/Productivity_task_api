import jwt from "jsonwebtoken";
import User from "../model/user.js";

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" });
    }
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SEC);
    const user = await User.findById(decoded.id).select("-password");
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};

export default authMiddleware;
