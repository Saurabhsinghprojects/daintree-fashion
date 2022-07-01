const BlogPost=require('../models/BlogPost')
const comment=require('../models/comment')

module.exports=async(req,res)=>{
    const id=req.params.id;
    const comm= comment.create(req.body);
    const commId=comm._id;
    await BlogPost.findByIdAndUpdate(req.params.id,{ $set: { comments: commId }});
    // myPost.update({$push: { "comments": comm }});
    res.redirect(`/post/${id}`)
}