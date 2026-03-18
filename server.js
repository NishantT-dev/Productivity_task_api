import app from "./app.js";
import dotenv from "dotenv";
import db_conn from "./config/db.js";

dotenv.config();
db_conn();
const PORT=process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
