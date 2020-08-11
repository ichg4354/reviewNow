import express from "express";
import routes from "../routes.js";
import { getCeoCreate, postCeoCreate } from "../controllers/userController.js";
import {
  getmainMenu,
  postmainMenu,
  results,
} from "../controllers/mainController.js";

const mainRouter = express.Router();

mainRouter.get("/", (req, res) => res.render("questionStart"));
mainRouter.get("/mainMenu", getmainMenu);
mainRouter.post("/mainMenu", postmainMenu);
mainRouter.get("/cleanliness", (req, res) => res.send("SHOW QUESTIONS ABOUT"));
mainRouter.get("/sideMenu", (req, res) =>
  res.send("SHOW QUESTIONS ABOUT SIDE MENU")
);
mainRouter.get("/4354/results", results);
mainRouter.get("/thankYou", (req, res) => res.render("thankYou"));
mainRouter.get("/services", (req, res) =>
  res.send("SHOW QUESTIONS ABOUT SERVICES")
);

export default mainRouter;
