export const login = (req,res) => res.render("login",{pageTitle : "LogIn"});
export const logout = (req,res) => res.render("logout",{pageTitle : "LogOut"});
export const join = (req,res) => res.render("join",{pageTitle : "Join"});
export const users = (req,res) => res.render("Users",{pageTitle : "Users"});
export const editProfile = (req,res) => res.render("editProfile",{pageTitle : "EditProfile"});
export const changePassword = (req,res) => res.render("changePassword",{pageTitle : "ChangePassWord"});
export const userDetail = (req,res) => res.render("UserDetail",{pageTitle : "UserDetail"});