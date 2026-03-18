import mongoose from "mongoose";

function db_conn() {
 try{ const conn = mongoose.connect(process.env.MONGO_URI);
  if (conn) {
    console.log("Database connected successfully");
  }
} catch(err){
console.log(err.message)
}}
export default db_conn;
