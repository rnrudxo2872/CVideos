import './db'
import app from "./app";
import dotenv from 'dotenv'
dotenv.config();

const port = process.env.PORT;
app.listen(port,function(){console.log('serverlisten'+port);});