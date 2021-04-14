import routes from '../routes';
export const home = (req,res) => {
    res.render("home", {pageTitle : "Home", videos});
}

export const search = (req,res) => {
    const {query:{term : searchBy}} = req;

    res.render("search", {searchBy, videos});
}

export const videoUpload = (req,res) => res.render('videosupload', {pageTitle : "Video Upload"});
export const PostvideoUpload = (req,res) =>{
    const {
        body:{
            file,
            title,
            desription
        }
    } = req;
    res.redirect(routes.videos+routes.videoDetail(324393));
}

export const videoDetail = (req,res) => res.render('videosDetail', {pageTitle : "Video Detail"});

export const videoEdite = (req,res) => res.render('videosEdite', {pageTitle : "Video Edit"});

export const videoDelete = (req,res) => res.render('videosDelete', {pageTitle : "Video Delete"});