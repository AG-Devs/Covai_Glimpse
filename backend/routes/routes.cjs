const express=require('express')
const router= express.Router()
const userController= require('../Controllers/userController.cjs')
const postController= require('../Controllers/postController.cjs')

router.post('/signup',userController.createNewUser) 
router.get('/user',userController.getAllUsers)
router.post('/oneUser',userController.getOneUser)
router.post('/updated',userController.updateFollow) 
router.post('/updating',userController.updateUnfollow) 
router.post('/users',userController.updateFollowedUsers) 
router.post('/people',userController.updateUnfollowedUsers) 

router.post('/post',postController.newPost) 
router.post('/update',postController.updatePost) 
router.post('/delete',postController.deletePost) 

router.get('/feed',postController.getAllPosts) 

router.post('/profile',userController.getSingleUser)
router.post('/notification',userController.getSingleUser)

router.post('/profiles',userController.getVisitedUser)

router.post('/profiledit',userController.editProfile)
router.post('/profilevideo',userController.deleteProfileVideo)
router.post('/profileimg',userController.updateProfileImage)

module.exports=router