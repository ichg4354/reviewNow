import routes from "./routes.js";

export const localsMiddleware = (req, res, next) => {
  res.locals.routes = routes;
  next();
};
