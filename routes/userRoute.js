import express from "express";
import { registerUser } from "../controller/userController/registerUser.js";
import { loginUser } from "../controller/userController/loginUser.js";
import authMiddleware from "../middleware/authMiddleware.js";
import { updateUserDetail } from "../controller/userController/updateUserDetail.js";
import deleteUser from "../controller/userController/deleteUser.js";
import { validateRegister } from "../middleware/userInputValidation.js";

const userRouter = express.Router();

userRouter.post("/", validateRegister,registerUser); // CREATE
userRouter.post("/login",loginUser);
userRouter.patch("/", authMiddleware, updateUserDetail); // UPDATE
userRouter.delete("/", authMiddleware, deleteUser); // DELETE

export default userRouter;
