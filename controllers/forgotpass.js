
const User=require('../models/User')
const bcrypt=require('bcrypt')

module.exports=async (req,res)=>{
   const  pass = await bcrypt.hash(Object.values(req.body)[2],10);

    User.findOneAndUpdate({email:Object.values(req.body)[0],forgot:Object.values(req.body)[1]},{
        $set:{password:pass}
    },(error)=>{
        console.log("password changed")
    })
    res.redirect('/auth/login')
}