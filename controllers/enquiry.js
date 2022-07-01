const EnquiryUser=require('../models/EnquiryUser.js')
const path=require('path')

module.exports=(req,res)=>{
    EnquiryUser.create(req.body,(error,user)=>{
        if(error){
            const validationErrors=Object.keys(error.errors).map(key=>error.errors[key].message)
            req.flash('validationErrors',validationErrors)
            req.flash('data',req.body)
            // req.session.validationErrors=validationErrors
            return res.redirect('/')
        }
        res.redirect('/')
    })
}