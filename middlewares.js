import routes from "./routes"

export const localsMiddleWare = (req,res,next) =>{
    res.locals.siteName = "CTube";
    res.locals.routes = routes;
    next();
}