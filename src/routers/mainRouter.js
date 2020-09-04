import express from "express";
import routes from "../routes.js";
import {
  getmainMenu,
  getsideMenu,
  getcleanliness,
  getservices,
  results,
  postmainMenu,
  postsideMenu,
  postservices,
  postcleanliness,
  getsuggestions,
  postsuggestions,
} from "../controllers/mainController.js";

const mainRouter = express.Router();

mainRouter.get("/", (req, res) => res.render("questionStart"));

mainRouter.get("/mainMenu", getmainMenu);
mainRouter.post("/mainMenu", postmainMenu);

mainRouter.get("/sideMenu", getsideMenu);
mainRouter.post("/sideMenu", postsideMenu);

mainRouter.get("/cleanliness", getcleanliness);
mainRouter.post("/cleanliness", postcleanliness);

mainRouter.get("/services", getservices);
mainRouter.post("/services", postservices);

mainRouter.get("/suggestions", getsuggestions);
mainRouter.post("/suggestions", postsuggestions);

mainRouter.get("/4354/results", results);
mainRouter.get("/thankYou", (req, res) => res.render("thankYou"));

export default mainRouter;
