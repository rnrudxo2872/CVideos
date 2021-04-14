import './db'
import app from "./app";
import dotenv from 'dotenv'
import Video from './models/Video'
import Comment from './models/Comment'
dotenv.config();

const port = process.env.PORT;
app.listen(port,function(){console.log('serverlisten'+port);});