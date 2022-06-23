const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = Schema({
    username:{
        unique: true,
        required:true,
        type:String,
    },
    password:{
        required:true,
        type:String,
    },
})

module.exports= mongoose.model('Users',UserSchema)