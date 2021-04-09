import express from "express";
import { videoUpload, videos, videoDetail, videoEdite, videoDelete } from "../controllers/videosController";
import routes from "../routes"
const Vrouter = express.Router();

Vrouter.get(routes.upload, videoUpload);

Vrouter.get(routes.videoDetail,videoDetail);

Vrouter.get(routes.videoEdite,videoEdite);

Vrouter.get(routes.videoDelete,videoDelete);


export default Vrouter;