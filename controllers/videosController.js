import routes from '../routes';
import Videos from '../models/Video'

export const home = async(req,res) => {
    try{
        const videos = await Videos.find({}).sort({_id:-1}); //역정렬
        res.render("home", {pageTitle : "Home", videos});
    }catch(error){
        console.log(error);
        res.render("home", {pageTitle : "Home", videos:[]});
    }
}

export const search = async(req,res) => {
    const {
        query:{term : searchBy}
    } = req;
    
    let videos = [];
    
    try {
        videos = await Videos.find({
            title:{$regex:searchBy, $options:'i'}
        });
    } catch (error) {
        console.log(error);
    }

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
    const testfile = req.file;
    console.log(testfile);
    const newVideo = await Videos.create({
        fileUrl:path, 
        title,
        description
    })
    res.redirect(routes.videos+routes.videoDetail(newVideo.id));
}

export const videoDetail = async(req,res) => {
    const {
        params:{id}
    } = req;

    try {
        const videos = await Videos.findById(id);
        res.render('videosDetail', {pageTitle : "Video Detail", videos})

    } catch (error) {
        res.redirect(routes.home);
    }  
};

export const videoEdite = async(req,res) => {
    const {
        params:{id}
    } = req;
    try {
        const video = await Videos.findById(id);
        res.render('videosEdite', {pageTitle : "Video Edit", video});
    } catch (error) {
        res.redirect(routes.home);
    }
};

export const PostvideoEdite = async(req,res) =>{
    const {
        params : {id},
        body:{title,description}
    } = req;
    
    try {
        await Videos.findOneAndUpdate({_id:id},{title, description});
        res.redirect(routes.videos+routes.videoDetail(id));
    } catch (error) {
     res.redirect(routes.home);   
    }
}

export const videoDelete = async(req,res) => {
    const {
        params:{id}
    } = req;
    try {
        await Videos.findOneAndDelete({_id:id});
        res.redirect(routes.home);
    } catch (error) {
        res.redirect(routes.home);
    }
}