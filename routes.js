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
    userDetail:(id) =>{
        if(id)
            return `/${id}`;
        
        //id가 없다면, 즉 유효하지 않은 id라면 문자열 반환
        else
            return `/:id`;
    },

    //Video
    videos:"/videos",
    upload:"/upload",
    videoDetail:(id) => {
        if(id)
        return `/${id}`;
    
        //id가 없다면, 즉 유효하지 않은 id라면 문자열 반환
        else
            return `/:id`;
    },
    videoEdite:(id) =>{
        if(id)
        return `/${id}/edit`;
    
        //id가 없다면, 즉 유효하지 않은 id라면 문자열 반환
        else
            return `/:id/edit`;
    },
    videoDelete:(id)=>{
        if(id)
        return `/${id}/delete`;
    
        //id가 없다면, 즉 유효하지 않은 id라면 문자열 반환
        else
            return `/:id/delete`;
    }
};

export default routes;