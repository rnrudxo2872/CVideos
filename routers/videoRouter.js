import express from "express";
import { videoUpload, videos, videoDetail, videoEdite, videoDelete, PostvideoUpload, PostvideoEdite } from "../controllers/videosController";
import { UploadVideo } from "../middlewares";
import routes from "../routes"
const Vrouter = express.Router();

Vrouter.get(routes.upload, videoUpload);
Vrouter.post(routes.upload, UploadVideo,PostvideoUpload);

Vrouter.get(routes.videoDetail(),videoDetail);

Vrouter.get(routes.videoEdite(),videoEdite);
Vrouter.post(routes.videoEdite(),PostvideoEdite);

Vrouter.get(routes.videoDelete(),videoDelete);


export default Vrouter;