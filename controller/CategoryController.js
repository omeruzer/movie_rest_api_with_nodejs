const Category = require('../models/Category')

const all = (req, res) => {

    Category.find()
    .populate([{path:'movies',populate: { path: 'director_id',select:'name' }}])
    .populate([{path:'movies',populate: { path: 'category_id',select:'title' }}])
        .then((result) => {
            res.json(result)
        }).catch((err) => {

        });
}

const detail = (req, res) => {

    Category.findById(req.params.id)
    .populate([{path:'movies',populate: { path: 'director_id',select:'name' }}])
    .populate([{path:'movies',populate: { path: 'category_id',select:'title' }}])
        .then((result) => {
            res.json(result)
        }).catch((err) => {

        });
}

const add = (req, res) => {
    const category = new Category(req.body)

    category.save().then((result) => {
        res.json(result)
    }).catch((err) => {

    });
}

const update = (req, res) => {

    Category.findByIdAndUpdate(req.params.id,req.body)
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.json(err)
        });
}

const remove = (req,res)=>{

    Category.findByIdAndRemove(req.params.id)
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