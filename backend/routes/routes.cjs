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
router.post('/userss',userController.updateFollowedUsers2) 
router.post('/people',userController.updateUnfollowedUsers) 
router.post('/postsupdate',userController.updateLikedPosts) 
router.post('/postsremove',userController.updateLikedPosts2)
router.post('/postupdate',userController.updateDislikedPosts) 
router.post('/postremove',userController.updateDislikedPosts2)

router.post('/post',postController.newPost) 
router.post('/update',postController.updatePost) 
router.post('/feedimg',postController.updateFeedImage) 
router.post('/delete',postController.deletePost)  

router.get('/feed',postController.getAllPosts) 

router.post('/profile',userController.getSingleUser)
router.post('/profile2',userController.getSingleUser2)
router.post('/username',userController.getSingleUsername)
router.post('/notification',userController.getSingleUser)

router.post('/profiles',userController.getVisitedUser)

router.post('/profiledit',userController.editProfile)
router.post('/profilevideo',userController.deleteProfileVideo)
router.post('/profileimg',userController.updateProfileImage)
router.post('/profileimage',userController.deleteProfileImage)

module.exports=router