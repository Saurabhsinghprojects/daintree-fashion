const mongoose= require('mongoose')
const Schema=mongoose.Schema;
var uniqueValidator=require('mongoose-unique-validator');
const bcrypt= require('bcrypt')

const UserSchema= new Schema({
    username:{
      type: String,
    //   required:[true,'Please provide username'],
        
    },
    password:{
        type: String,
        // required:[true,'Please provide password']
    },
    email:{
        type: String,
        unique: true
    },
    bio:{
        type: String,
        // required:[true,'Please provide bio']
    },
    forgot:{
        type: String,
        // required:[true,'Please answer the forgot password question']
    },
    image:{
        type: String,
        // required:[true,'Please provide an image']
    },
    role:{
        type:Number,
        default:0
    }
});

UserSchema.plugin(uniqueValidator);
UserSchema.pre('save',function(next){
    const user=this
    
    bcrypt.hash(user.password,10,(error,hash)=>{
        user.password=hash
        next()
    })
})

const User= mongoose.model('User',UserSchema);
module.exports= User