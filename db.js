import mongoose from "mongoose";

const db = mongoose.connection;

mongoose.connect("mongodb://localhost:27017/myapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db.on("error", () => console.log("Error on DB"));
db.once("open", function () {
  console.log("✅  Connected To DB");
});
