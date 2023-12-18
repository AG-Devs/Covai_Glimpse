const express=require('express')
const router= express.Router()
const userController= require('../Controllers/userController.cjs')
const postController= require('../Controllers/postController.cjs')


router.post('/signup',userController.createNewUser) 
router.get('/user',userController.getAllUsers)
router.post('/oneUser',userController.getOneUser)

router.post('/post',postController.newPost) 
router.post('/update',postController.updatePost) 
router.post('/delete',postController.deletePost) 
router.post('/liked',postController.updateLike) 
router.get('/feed',postController.getAllPosts) 

router.post('/profile',userController.getSingleUser)


module.exports=router