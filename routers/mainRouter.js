import express from "express";
import routes from "../routes.js";

const mainRouter = express.Router();
mainRouter.get(routes.MAIN, (req, res) => res.render("ceoResults"));
mainRouter.get(routes.CUSTOMER, (req, res) => res.send("CUSTOMER"));
mainRouter.get(routes.CEO, (req, res) => res.send("CEO"));
mainRouter.get(routes.QPG1, (req, res) => res.send("QUESTION PAGE ONE"));
mainRouter.get(routes.RESULTS, (req, res) => res.send("RESULTS"));

export default mainRouter;
