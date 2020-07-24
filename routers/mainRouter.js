import express from "express";
import routes from "../routes.js";
import { main, ceoCreate, qpg1, results } from "../controllers/results.js";

const mainRouter = express.Router();
mainRouter.get(routes.MAIN, main);
mainRouter.get(routes.CUSTOMER, (req, res) => res.send("Customer"));
mainRouter.get(routes.CEOCREATE, ceoCreate);
mainRouter.get(routes.QPG1, qpg1);
mainRouter.get(routes.RESULTS, results);

export default mainRouter;
