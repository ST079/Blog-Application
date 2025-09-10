const { Schema, model } = require("mongoose");
const { ObjectId } = Schema.Types;

const blogModel = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: ObjectId, ref: "User", required: true },
    status: {
      type: String,
      enum: ["published", "Draft"],
      default: "Draft",
      required: true,
    },
    pictureUrl: String,
  },
  { timestamps: true }
);

module.exports = new model("Blog", blogModel);
