const express=require('express')
const router= express.Router()
const User=require('../models/SignModel.cjs')
const userController= require('../Controllers/userController.cjs')


router.post('/signup',userController.createNewUser) 
router.get('/user',userController.getAllUsers)




module.exports=router