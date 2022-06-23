const Director = require('../models/Director')

const all = (req, res) => {

    Director.find()
    .populate([{path:'movies',populate: { path: 'director_id',select:'name' }}])
    .populate([{path:'movies',populate: { path: 'category_id',select:'title' }}])
        .then((result) => {
            res.json(result)
        }).catch((err) => {

        });
}

const detail = (req, res) => {

    Director.findById(req.params.id)
        .then((result) => {
            res.json(result)
        }).catch((err) => {

        });
}

const add = (req, res) => {
    const director = new Director(req.body)

    director.save().then((result) => {
        res.json(result)
    }).catch((err) => {

    });
}

const update = (req, res) => {

    Director.findByIdAndUpdate(req.params.id,req.body)
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.json(err)
        });
}

const remove = (req,res)=>{

    Director.findByIdAndRemove(req.params.id)
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