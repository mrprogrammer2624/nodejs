import mongoose from "mongoose";

const catagoriesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

export const Categoric = mongoose.model("Categoric", catagoriesSchema);
