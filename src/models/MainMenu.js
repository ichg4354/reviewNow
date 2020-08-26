import mongoose from "mongoose";

const mainMenuSchema = mongoose.Schema({
  mainMenuTarget: String,
  mainMenuMessage: String,
});

const model = mongoose.model("MainMenu", mainMenuSchema);
export default model;
