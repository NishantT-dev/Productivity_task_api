import express from "express";
import userRouter from "./routes/userRoute.js";
import morgan from "morgan";
import taskRouter from "./routes/taskRoute.js";
const app = express();
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send(" / HOME PAGE /");
});
app.use("/api/users", userRouter);
app.use("/api/tasks",taskRouter)
export default app;

