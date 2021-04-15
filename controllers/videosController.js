import routes from '../routes';
import Videos from '../models/Video'

export const home = async(req,res) => {
    try{
        let videos = await Videos.find({});
        res.render("home", {pageTitle : "Home", videos});
    }catch(error){
        console.log(error);
        res.render("home", {pageTitle : "Home", videos:[]});
    }
}

export const search = (req,res) => {
    const {query:{term : searchBy}} = req;

    res.render("search", {searchBy, videos});
}

export const videoUpload = (req,res) => res.render('videosupload', {pageTitle : "Video Upload"});
export const PostvideoUpload = async(req,res) =>{
    const {
        body:{
            title,
            description
        },
        file:{path}
    } = req;

    const newVideo = await Videos.create({
        fileUrl:path, 
        title,
        description
    })
    res.redirect(routes.videos+routes.videoDetail(newVideo.id));
}

export const videoDetail = (req,res) => res.render('videosDetail', {pageTitle : "Video Detail"});

export const videoEdite = (req,res) => res.render('videosEdite', {pageTitle : "Video Edit"});

export const videoDelete = (req,res) => res.render('videosDelete', {pageTitle : "Video Delete"});