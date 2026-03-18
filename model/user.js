import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is Req."]
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"]
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      select: false
     
    },
  },
  {
    timestamps: true,
  },
);

userSchema.pre("save", async function () {
  if (!this.isModified("password")) return next();
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
});

const User = mongoose.model("User", userSchema);
export default User;
