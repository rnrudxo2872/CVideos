import mongoose from 'mongoose';
import dotenv from'dotenv';
dotenv.config();

mongoose.connect(process.env.MongoURL,
{
  useNewUrlParser:true,
  useFindAndModify:false,
  useUnifiedTopology: true
}
);

const Mongodb = mongoose.connection;

let handleOpen = () => console.log("🏹Now MongoDB Connected");
let handleError = error => console.log("MongoDB Connection Error!");

Mongodb.once("open",handleOpen);
Mongodb.on("error",handleError);