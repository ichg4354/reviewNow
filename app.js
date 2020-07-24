import express from "express";
import routes from "./routes.js";
import mainRouter from "./routers/mainRouter.js";

import pug from "pug";

const app = express();

app.set("view engine", "pug");

app.use(mainRouter);
export default app;
