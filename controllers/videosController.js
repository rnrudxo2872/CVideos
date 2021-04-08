export const home = (req,res) => res.render("home", {pageTitle : "Home"});

export const search = (req,res) => {
    const {query:{term : searchBy}} = req;

    res.render("search", {searchBy});
}

export const videos = (req,res) => res.render('videos', {pageTitle : "Video"});

export const videoUpload = (req,res) => res.render('videosupload', {pageTitle : "Video Upload"});

export const videoDetail = (req,res) => res.render('videosDetail', {pageTitle : "Video Detail"});

export const videoEdite = (req,res) => res.render('videosEdite', {pageTitle : "Video Edit"});

export const videoDelete = (req,res) => res.render('videosDelete', {pageTitle : "Video Delete"});