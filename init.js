import app from "./app.js";
import "./models/Ceo.js";
import "./models/Question.js";

const PORT = 1000;

app.listen(PORT, () =>
  console.log(`✅  Listening to http://localhost:${PORT}`)
);
