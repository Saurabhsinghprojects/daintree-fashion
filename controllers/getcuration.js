const Curation=require('../models/Curation')

module.exports=async(req,res)=>{
    const curation=await (await Curation.findById(req.params.id)).populate('userid');
    console.log(curation)
    res.render('curation',{
        curation
    });
}