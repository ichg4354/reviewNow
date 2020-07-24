import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ceoSchema = new Schema({
  nameOfBuisness: String,
  nameOfOwner: String,
  createDate: {
    type: Date,
    default: Date.now,
  },
  questions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question",
    },
  ],
});

const model = mongoose.model('Ceo', ceoSchema)
export default model
