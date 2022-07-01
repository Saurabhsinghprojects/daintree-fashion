const mongoose= require('mongoose')
const Schema=mongoose.Schema;

const EnquiryUserSchema= new Schema({
    username:{
      type: String,
      required:[true,"Please provide your username"]
    },
    phone:{
        type: Number,
        required:[true,"Please provide your phone no."]
    },
    email:{
        type: String,
        required:[true,"Please provide your email"]
    },
    age:{
        type: String,
        required:[true,"Please specify your age-group"]
    },
    message:{
        type: String,
        required:[true,"Please specify your purpose"]
    }
});

const EnquiryUser= mongoose.model('EnquiryUser',EnquiryUserSchema);
module.exports= EnquiryUser