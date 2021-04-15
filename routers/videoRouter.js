import express from "express";
import { videoUpload, videos, videoDetail, videoEdite, videoDelete, PostvideoUpload } from "../controllers/videosController";
import { UploadVideo } from "../middlewares";
import routes from "../routes"
const Vrouter = express.Router();

Vrouter.get(routes.upload, videoUpload);
Vrouter.post(routes.upload, UploadVideo,PostvideoUpload);

Vrouter.get(routes.videoDetail(),videoDetail);

Vrouter.get(routes.videoEdite,videoEdite);

Vrouter.get(routes.videoDelete,videoDelete);


export default Vrouter;