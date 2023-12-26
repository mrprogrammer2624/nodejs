import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      unique: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    subTodos: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "subTodos",
        },
      ],
    },
  },
  { timestamps: true }
);

export const Todo = mongoose.model("Todo", TodoSchema);
