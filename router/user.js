const express = require('express')
const router = express.Router()

// Controller
const UserController = require('../controller/UserController')

router.get('/',UserController.all)
router.post('/login',UserController.login)
router.post('/register',UserController.register)

module.exports=router