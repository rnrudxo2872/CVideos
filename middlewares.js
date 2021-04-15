import routes from "./routes"
import multer from "multer"

const multerVideo = multer({dest:'uploads/videos/'});

export const localsMiddleWare = (req,res,next) =>{
    res.locals.siteName = "CTube";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated : true,
        id:1
    }
    next();
}

export const UploadVideo = multerVideo.single('videoFile');