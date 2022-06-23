const express = require('express')
const router = express.Router()

// Controller
const CategoryController = require('../controller/CategoryController')

router.get('/',CategoryController.all)
router.post('/add',CategoryController.add)
router.get('/:id',CategoryController.detail)
router.put('/:id',CategoryController.update)
router.delete('/:id',CategoryController.remove)

module.exports=router