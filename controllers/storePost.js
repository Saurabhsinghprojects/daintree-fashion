const BlogPost=require('../models/BlogPost')
const path=require('path')

module.exports=(req,res)=>{
    let image = req.files.image;
    image.mv(path.resolve(__dirname,'..','public/images',image.name),async (error)=>{
        await BlogPost.create({
            ...req.body,
            image: '/images/'+ image.name,
            userid:req.session.userId
        })
        res.redirect('/')
    })
}