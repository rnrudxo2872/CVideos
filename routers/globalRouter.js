import express from "express";
import routes from "../routes";
const Grouter = express.Router();

Grouter.get(routes.home, (req,res) =>{
    res.send('global');
})

Grouter.get(routes.login, (req,res) =>{

})
Grouter.get(routes.logout, (req,res) =>{

})
Grouter.get(routes.join, (req,res) =>{

})
Grouter.get(routes.search, (req,res) =>{

})



export default Grouter;