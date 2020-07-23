import express from "express";
import routes from "./routes.js";
import mainRouter from "./routers/mainRouter.js";

const app = express();

app.use(mainRouter);
export default app;
