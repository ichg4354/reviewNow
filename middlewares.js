import routes from "./routes"
export const localsMiddleware = (req, res) => {
    res.locals.routes = routes
}