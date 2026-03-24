import mongoose from "mongoose";

const db_conn = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("Database connection failed:", err.message);
    process.exit(1);
  }
};
export default db_conn;
