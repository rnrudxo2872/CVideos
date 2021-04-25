import multer from "multer"
import routes from "./routes"

const multerVideo = multer({dest:'uploads/videos/'});

export const localsMiddleWare = (req,res,next) =>{
    res.locals.siteName = "CTube";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated : false,
        id:1
    }
    next();
}

export const UploadVideo = multerVideo.single('videoFile');