import app from "./app.js";
import "./models/Ceo.js";
import "./models/Question.js";

import "./models/MainMenu.js";
import "./models/SideMenu.js";
import "./models/Services.js";
import "./models/Cleanliness.js";

const PORT = 1000;

app.listen(PORT, () =>
  console.log(`✅  Listening to http://localhost:${PORT}`)
);
