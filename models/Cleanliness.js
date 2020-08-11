import mongoose from "mongoose"

const cleanlinessSchema = mongoose.Schema({
    cleanlinessTarget: String,
    cleanlinessMessage:String,
})

const model = mongoose.model("Cleanliness",cleanlinessSchema)
export default model
