import express from "express";
import routes from "../routes.js";

const mainRouter = express.Router();
mainRouter.get(routes.MAIN, (req, res) => res.render("main"));
mainRouter.get(routes.CUSTOMER, (req, res) => res.send("Customer"));
mainRouter.get(routes.CEOCREATE, (req, res) => res.send("ceoCreate"));
mainRouter.get(routes.QPG1, (req, res) => res.send("qpg1"));
mainRouter.get(routes.RESULTS, (req, res) => res.render("ceoResults"));

export default mainRouter;
