import express from "express";
import routes from "../routes.js";
import {
  getCeoCreate,
  results,
  postCeoCreate,
} from "../controllers/userController.js";
import { main } from "../controllers/mainController.js";
import { qpg1 } from "../controllers/questionController.js";

const mainRouter = express.Router();

mainRouter.get(routes.MAIN, main);

mainRouter.get(routes.CUSTOMER, (req, res) => res.send("Customer"));

mainRouter.get(routes.CEOCREATE, getCeoCreate);
mainRouter.post(routes.CEOCREATE, postCeoCreate);

mainRouter.get(routes.QPG1, qpg1);
mainRouter.get(routes.RESULTS, results);

export default mainRouter;
