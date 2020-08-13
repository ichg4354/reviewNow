import helmet from "helmet";
import express from "express";
import mongoose from "mongoose";
import pug from "pug";
import bodyParser from "body-parser";
import routes from "./routes.js";
import mainRouter from "./routers/mainRouter.js";
import "./db.js";
import { localsMiddleware } from "./middlewares.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "pug");
app.use("/css", express.static("css"));
app.use(localsMiddleware);

app.use(mainRouter);
export default app;
