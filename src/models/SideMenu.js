import mongoose from "mongoose";

const sideMenuSchema = mongoose.Schema({
  sideMenuTarget: String,
  sideMenuMessage: String,
});

const model = mongoose.model("SideMenu", sideMenuSchema);
export default model;
