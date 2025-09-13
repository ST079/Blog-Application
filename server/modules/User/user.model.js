const { Schema, model } = require("mongoose");
const { subscribe } = require("./userRouter");
const { ObjectId } = Schema.Types;

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    roles: {
      type: [String],
      enum: ["admin", "user", "author","editor","subscriber"],
      default: "user",
      required: true,
    },
    token: String,
  },
  { timestamps: true }
);

module.exports = model("User", userSchema);
