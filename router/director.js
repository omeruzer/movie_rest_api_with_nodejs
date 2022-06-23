const express = require('express')
const router = express.Router()

// Controller
const DirectorController = require('../controller/DirectorController')

router.get('/',DirectorController.all)
router.post('/add',DirectorController.add)
router.get('/:id',DirectorController.detail)
router.put('/:id',DirectorController.update)
router.delete('/:id',DirectorController.remove)

module.exports=router