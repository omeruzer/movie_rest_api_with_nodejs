const User = require('../models/User')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const all = (req,res)=>{
    User.find()
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            
        });
}

const login = (req,res) => {
    User.findOne({username:req.body.username},(err,user)=>{
        if(err){
            throw err
        }

        if(!user){
            res.json({status:false,message:'user not found'})
        }else{
            bcrypt.compare(req.body.password,user.password).then((result) => {
                if(!result){
                    res.json({status:false,message:'wrong password'})
                }else{
                    const payload={
                        username:req.body.username
                    }

                    const token = jwt.sign(payload,req.app.get('api_secret_key'))

                    res.json({
                        status:true,
                        token
                    })
                }
            }).catch((err) => {
                
            });
        }
    })
 }


const register = (req, res) => {


    bcrypt.hash(req.body.password, 10).then((hash) => {
        const user = new User({
            username:req.body.username,
            password: hash,

        })

        user.save()
            .then((result) => {
                res.json(result)
            }).catch((err) => {
                res.json(err)
            });
    });



}

module.exports = {
    login,
    register,
    all
}