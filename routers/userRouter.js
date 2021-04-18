import express from "express";
import { changePassword, editProfile, userDetail, users } from "../controllers/usersController";
import routes from "../routes"

const Urouter = express.Router();

Urouter.get(routes.home,users)

Urouter.get(routes.editProfile,editProfile)

Urouter.get(routes.changePassword, changePassword)

Urouter.get(routes.userDetail(), userDetail)

module.exports = Urouter;