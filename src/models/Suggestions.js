import mongoose from "mongoose";

const suggestionsSchema = mongoose.Schema({
  suggestionsTarget: String,
  suggestionsMessage: String,
});

const model = mongoose.model("Suggestions", suggestionsSchema);
export default model;
