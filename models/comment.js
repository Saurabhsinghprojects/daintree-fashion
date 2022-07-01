const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const comment = require('../models/comment')

const commentSchema = new Schema({
    username: String,
    message: String,
    email: String,
    reply: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'comment'
    }]
})

const Comment=mongoose.model('comment',commentSchema)
module.exports=Comment;