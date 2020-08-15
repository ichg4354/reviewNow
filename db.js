import mongoose from "mongoose";
import dotenv from "dotenv";

const db = mongoose.connection;

// mongoose.connect("mongodb://localhost:27017/reviewNow", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

dotenv.config();

mongoose.connect(
  `mongodb+srv://admin:${process.env.dbPassword}@cluster0.tmyom.mongodb.net/${process.env.dbName}?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

db.on("error", () => console.log("Error on DB"));
db.once("open", function () {
  console.log("✅  Connected To DB");
});
