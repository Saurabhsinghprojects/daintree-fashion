const Curation=require('../models/Curation')
const path=require('path')

module.exports=(req,res)=>{
     Curation.create({
            ...req.body,
            userid:req.session.userId
        })
        res.redirect('/dashboard')
    }
