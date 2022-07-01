const User = require('../models/User.js')
const path = require('path')

module.exports = (req, res) => {
    // await User.create(req.body, (error, user) => {
    //         if (error) {
    //             const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
    //             req.flash('validationErrors', validationErrors)
    //             req.flash('data', req.body)
    //             // req.session.validationErrors=validationErrors
    //             return res.redirect('/auth/register')
    //         }
    //         res.redirect('/')
    //     }

    //     )
    console.log(Object.values(req.body)[0])
    let err="false";
    if(req.files==null){
       // const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
                req.flash('validationErrors', "Please upload an image")
                req.flash('data', req.body)
                err="true"
                // return res.redirect('/auth/register')
       
    }
    if(Object.values(req.body)[0]==''){
        req.flash('validationErrors', "Please provide fill in your Name")
                req.flash('data', req.body)
                err="true"
                // return res.redirect('/auth/register')
    }
    if(Object.values(req.body)[1]==''){
        req.flash('validationErrors', "Please provide fill in your E-mail")
                req.flash('data', req.body)
                err="true"
                // return res.redirect('/auth/register')
    }
    if(Object.values(req.body)[2]==''){
        req.flash('validationErrors', "Please fill in a password ")
        req.flash('data', req.body)
                err="true"
                // return res.redirect('/auth/register')
    }
    if(Object.values(req.body)[3]==''){
        req.flash('validationErrors', "Please fill in your bio")
                req.flash('data', req.body)
                err="true"
                // return res.redirect('/auth/register')
    }
    if(Object.values(req.body)[4]==''){
        req.flash('validationErrors', "Please answer the forgot password Question")
                req.flash('data', req.body)
                err="true"
                // return res.redirect('/auth/register')
    }
    if(err=="true"){
       
        return res.redirect('/auth/register')
    }
   
    let image = req.files.image;
    image.mv(path.resolve(__dirname, '..', 'public/images', image.name), async (errorL) => {

        await User.create({
            ...req.body,
            image: '/images/' + image.name
        }
        )
        res.redirect('/auth/login')
    })


}