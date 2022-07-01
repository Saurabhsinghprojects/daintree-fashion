const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const comment= require('../models/comment')

const BlogPostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    // username:String,
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    datePosted: {
        type: Date,
        default: new Date()
    },
    image: String,
    styling: Boolean,
    skincare: Boolean,
    haircare: Boolean,
    personalitydevelopment: Boolean,
    powerdressing: Boolean,
    curatedclothes: Boolean,
   
    comments: [{
        // type: mongoose.Schema.Types.ObjectId,
        type: String,
        ref: 'comment'
    }]
});
const BlogPost = mongoose.model('BlogPost', BlogPostSchema);
module.exports = BlogPost