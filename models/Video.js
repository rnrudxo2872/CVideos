import mongoose from 'mongoose'

const VideoSchema = new mongoose.Schema({
    fileUrl:{
        type : String,
        require: "fileURL is required"
    },
    title:{
        type : String,
        require : "Title is requried"
    },
    description:String,
    views:{
        type : Number,
        default : 0
    },
    createdAt:{
        type : Date,
        default : Date.now
    },
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment"
    }]
})

const model = mongoose.model("Video",VideoSchema);

export default model;