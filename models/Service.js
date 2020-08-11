import mongoose from "mongoose";

const servicesSchema = mongoose.Schema({
  servicesTarget: String,
  servicesMessage: String,
});

const model = mongoose.model("Services", servicesSchema);
export default model;
