const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DirectorSchema = Schema({
    name:{
        required:true,
        type:String
    },
    movies:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movies',
        required:true 
    }]
})

module.exports= mongoose.model('Directors',DirectorSchema)