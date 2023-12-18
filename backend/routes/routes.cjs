const express=require('express')
const router= express.Router()
const userController= require('../Controllers/userController.cjs')
const postController= require('../Controllers/postController.cjs')


router.post('/signup',userController.createNewUser) 
router.get('/user',userController.getAllUsers)
router.post('/oneUser',userController.getOneUser)

router.post('/post',postController.newPost) 
router.post('/update',postController.updatePost) 
router.get('/feed',postController.getAllPosts) 




module.exports=router