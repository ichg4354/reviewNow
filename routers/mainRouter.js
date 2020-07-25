import express from "express";
import routes from "../routes.js";
import { getCeoCreate } from "../controllers/userController.js";

const mainRouter = express.Router();
mainRouter.get(routes.CEOCREATE, getCeoCreate);
// mainRouter.get(routes.MAIN, main);

// mainRouter.get(routes.CUSTOMER, (req, res) => res.send("Customer"));

// mainRouter.post(routes.CEOCREATE,postCeoCreate)

// mainRouter.get(routes.QPG1, qpg1);
// mainRouter.get(routes.RESULTS, results);

export default mainRouter;
