import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import createTask from "../controller/taskController/createTask.js";
import { validateTask } from "../middleware/taskInputValidation.js";
import updateTask from "../controller/taskController/updatetask.js";
import getAllTask from "../controller/taskController/getAllTask.js";
import { getTaskInsight } from "../controller/taskController/getTaskInsight.js";
const taskRouter = express.Router();

taskRouter.post("/", authMiddleware, validateTask, createTask);
taskRouter.patch("/:id/complete", authMiddleware, updateTask);
taskRouter.get("/", authMiddleware, getAllTask);
taskRouter.get("/insight",authMiddleware,getTaskInsight);
export default taskRouter;
