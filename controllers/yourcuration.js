const Curation=require('../models/Curation')
module.exports=async (req,res)=>{
    // res.sendFile(path.resolve(__dirname,'pages/blog.html'))
    const curations= await Curation.find({})
    res.render('yourcuration',{
        curations
    });
}