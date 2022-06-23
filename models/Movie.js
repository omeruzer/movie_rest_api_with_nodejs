const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MovieSchema = Schema({
    img: {
        required: true,
        type: String
    },
    content: {
        required: true,
        type: String
    },
    name: {
        required: true,
        type: String
    },
    rate: {
        required: true,
        type: Number
    },
    year: {
        required: true,
        type: Number
    },
    director_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Directors',
        required:true
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categories',
        required:true
    },
})

module.exports = mongoose.model('Movies', MovieSchema)