import express from "express";
import { join, login, logout } from "../controllers/UsersController";
import { home, search } from "../controllers/videosController";
import routes from "../routes";
const Grouter = express.Router();

Grouter.get(routes.home,home);

Grouter.get(routes.login,login)

Grouter.get(routes.logout,logout)

Grouter.get(routes.join,join)

Grouter.get(routes.search,search)



export default Grouter;