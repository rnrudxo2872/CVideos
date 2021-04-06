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

const app = express();

app.use(favicon('./public/favicon.ico'));
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan("dev"));

app.use(routes.home, GlobalRouter);
app.use(routes.users, UserRouter);
app.use(routes.videos, VideoRouter);

export default app;