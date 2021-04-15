import express from "express";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import morgan from "morgan";
import favicon from "serve-favicon";
import GlobalRouter from "./routers/globalRouter";
import UserRouter from "./routers/userRouter"
import VideoRouter from "./routers/videoRouter"
import routes from "./routes"
import { localsMiddleWare } from "./middlewares";

const app = express();

app.set('view engine','pug');
app.use("/uploads",express.static("uploads"));
app.use(favicon('./public/favicon.ico'));
app.use(helmet());
// app.use(helmet({
//     contentSecurityPolicy: false,
//     }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan("dev"));

app.use(localsMiddleWare);

app.use(function(req, res, next) {
    res.setHeader("Content-Security-Policy", "script-src 'self' https://archive.org");
    return next();
    });

app.use(routes.home, GlobalRouter);
app.use(routes.users, UserRouter);
app.use(routes.videos, VideoRouter);

export default app;