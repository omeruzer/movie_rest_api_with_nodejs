const express = require('express')
const router = express.Router()

// Controller
const MovieController = require('../controller/MovieController')

router.get('/',MovieController.all)
router.post('/add',MovieController.add)
router.get('/:id',MovieController.detail)
router.put('/:id',MovieController.update)
router.delete('/:id',MovieController.remove)

module.exports=router