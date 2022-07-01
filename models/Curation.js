const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CurationSchema = new Schema({
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
    answer:{
        type: String,
        
    },
    solved:{
        type: Boolean,
        default: false

    }
});
const Curation = mongoose.model('Curation', CurationSchema);
module.exports = Curation