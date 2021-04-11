import routes from "../routes";

export const login = (req,res) => res.render("login",{pageTitle : "LogIn"});

export const logout = (req,res) => res.render("logout",{pageTitle : "LogOut"});

export const join = (req,res) => res.render("join",{pageTitle : "Join"});

export const Postjoin = (req,res) => {
    
    //request로 온 body 체크
    const {
        body :{
            name,
            mail,
            password,
            password2
        }
    } = req;

    //password가 서로 같은 지,
    if(password !== password2){
        
        //잘못된 문법, 서버가 이해 X => 400
        res.status(400);
        res.redirect(routes.join);
    }else{

        //성공시, Home 화면
        res.redirect(routes.home);
    }
}

export const users = (req,res) => res.render("Users",{pageTitle : "Users"});

export const editProfile = (req,res) => res.render("editProfile",{pageTitle : "EditProfile"});

export const changePassword = (req,res) => res.render("changePassword",{pageTitle : "ChangePassWord"});

export const userDetail = (req,res) => res.render("UserDetail",{pageTitle : "UserDetail"});