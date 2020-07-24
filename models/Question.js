import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  foodType: String,
  tooSour: Number,
  tooSweet: Number,
  tooSpicy: Number,
  tooBitter: Number,
});

const model = mongoose.model("Question", questionSchema);
export default model;
