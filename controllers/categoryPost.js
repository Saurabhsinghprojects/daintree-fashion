// const BlogPost=require('../models/BlogPost')

// module.exports=async(req,res)=>{
//     const blogpost=await (await BlogPost.find({[req.params.category]:"true"}));
//     console.log(blogpost)
//     res.render('post',{
//         blogpost
//     });
// }
const BlogPost=require('../models/BlogPost')
module.exports=async (req,res)=>{
  
    // res.sendFile(path.resolve(__dirname,'pages/blog.html'))
    const blogposts= await BlogPost.find({[req.params.category]:true})
    res.render('blog',{
        blogposts
    });
}
