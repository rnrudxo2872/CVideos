import mongoose from 'mongoose'

const CommentSchema = new mongoose.Schema({
    text:{
        type : String,
        require : "Comment text is required"
    },
    createAt:{
        type : Date,
        default : Date.now
    }
})

const model = mongoose.model("Comment",CommentSchema);

export default model;