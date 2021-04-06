const routes ={
    //Global
    home:"/",
    join:"/join",
    login:"/login",
    logout:"/logout",
    search:"/search",

    //User
    users:"/users",
    editProfile:"/edit-profile",
    changePassword:"/change-password",
    userDetail:"/:id",

    //Video
    videos:"/videos",
    upload:"/upload",
    videoDetail:"/:id",
    videoEdite:"/:id/edit",
    videoDelete:"/:id/delete"
};

export default routes;