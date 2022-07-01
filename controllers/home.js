const BlogPost=require('../models/BlogPost')

module.exports=async (req,res)=>{
    // res.sendFile(path.resolve(__dirname,'pages/blog.html'))
    const blogposts= await BlogPost.find({}).populate('userid');
    var username=""
    var phone=""
    var email=""
    const data=req.flash('data')[0];

    if(typeof data !="undefined"){
        username=data.username
        phone=data.phone
        email=data.email
    }
    console.log(req.session)
    res.render('index',{
           blogposts,
           errors:req.flash('validationErrors'),
            username:username,
            phone:phone,
            email:email
    });
}
