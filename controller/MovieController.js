const Movie = require('../models/Movie')
const Category = require('../models/Category')
    const mongoose = require('mongoose');
const { populate } = require('../models/Movie');
const Director = require('../models/Director');

const all = (req, res) => {

    Movie.find()
        .populate('category_id', 'title')
        .populate('director_id', 'name')
        .then((result) => {
            res.json(result)
        }).catch((err) => {

        });
}

const detail = (req, res) => {

    Movie.findById(req.params.id)
        .populate('category_id', 'title')
        .populate('director_id', 'name')
        .then((result) => {
            res.json(result)
        }).catch((err) => {

        });
}

const add = (req, res) => {
    const movie = new Movie(req.body)

    movie.save().then(async (result) => {
        await Category.findByIdAndUpdate(result.category_id, { $push: { movies: result._id } })
            .then(async (value) => {
                await Director.findByIdAndUpdate(result.director_id, { $push: { movies: result._id } })
                .then((result) => {
                    res.json({message:'success'})
                }).catch((err) => {
                    
                }); 
            }).catch((err) => {
                
            });

    }).catch((err) => {

    });
}

const update = (req, res) => {

    Movie.findByIdAndUpdate(req.params.id, req.body)
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.json(err)
        });
}

const remove = (req, res) => {

    Movie.findByIdAndRemove(req.params.id)
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.json(err)
        });
}




module.exports = {
    all,
    add,
    detail,
    update,
    remove
}