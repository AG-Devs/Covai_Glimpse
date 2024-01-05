const User=require('../models/SignModel.cjs')

const createNewUser = async(req,res)=>{
        
            const {id,name,createPassword,mobilenumber,gender,age,gmail,profileImage,profileVideo,followers,likedPosts,dislikedPosts,commentedPosts,followedUsers,Notifications} = req.body
            
            const data= {
                        id:id,
                        userName:name,
                        password:createPassword,
                        mobilenumber:mobilenumber,
                        gender:gender,
                        age:age,
                        gmail:gmail,
                        profileImage:profileImage,
                        profileVideo:profileVideo,
                        followers:followers,
                        likedPosts:likedPosts,
                        dislikedPosts:dislikedPosts,
                        commentedPosts:commentedPosts,
                        followedUser:followedUsers,
                        messages:Notifications
                    }

        try {
            const checker = await User.findOne({userName:name})

            if (checker) {
                res.json('exist')
            }
            else {
                await User.insertMany([data])
                res.json('not exist')
            } 
        }
        catch(e){
            res.json('Sorry! something went wrong')
        }
    }

const getSingleUser = async(req,res) => {
        const {userName} = req.body 
        try{
            const data = await User.findOne({userName:userName})
            if (data){
                res.send({data:data})
            }
            else{
                res.json('not exist')
            }
        }
        catch(e){
            res.json('error')
        }
}
const getSingleUsername = async(req,res) => {
        const {visited} = req.body 
        try{
            const data = await User.findOne({userName:visited})
            if (data){
                res.send({data:data})
            }
            else{
                res.json('not exist')
            }
        }
        catch(e){
            res.json('error')
        }
}

const getVisitedUser = async(req,res) => {
    const {visit} = req.body 
    try{
        const data = await User.findOne({userName:visit})
        if (data){
            res.send({data:data})
        }
        else{
            res.json('not exist')
        }
    }
    catch(e){
        res.json('error')
    }
}

 
const getOneUser = async(req,res) => {
    const {name,enterPassword} = req.body 
    try{
        const checker = await User.findOne({userName:name,password:enterPassword})
        if (checker){
            res.json('exist')
        }
        else{
            res.json('not exist')
        }
    }
    catch(e){
        res.json('error')
    }
}

const updateFollow = async (req,res)=>{
    const {visit,newFollowers,Notification2} = req.body
    try{
        await User.updateOne({userName:visit},{
            $set:{
                followers:newFollowers,
                messages:Notification2
            }
        })
        res.json('done')
    }
    catch(err){
        res.json('error')
    }
}
const updateUnfollow = async (req,res)=>{
    const {visit,newFollowers} = req.body
    try{
        await User.updateOne({userName:visit},{
            $set:{
                followers:newFollowers,
            }
        })
        res.json('done')
    }
    catch(err){
        res.json('error')
    }
}

const updateFollowedUsers = async (req,res)=>{
    const {userName,temp4} = req.body
    try{
        await User.updateOne({userName:userName},{
            $set:{
                followedUser:temp4
            }
        })
        res.json('done')
    }
    catch(err){
        res.json('error')
    }
}
const updateUnfollowedUsers = async (req,res)=>{
    const {userName,temp4} = req.body
    try{
        await User.updateOne({userName:userName},{
            $set:{
                followedUser:temp4
            }
        })
        res.json('done')
    }
    catch(err){
        res.json('error')
    }
}

const getAllUsers = async (req,res)=>{
    try{
        const data = await User.find({})
        res.send({data:data})
    }
    catch(e){
        res.json('error')
    }   
}

const editProfile = async (req,res)=>{
    const {userName,mobilenumber1,gmail1,age1,gender1,profileVideo1}=req.body
    try{
      await User.updateOne({userName:userName},{$set:{mobilenumber:mobilenumber1,
                                                      gmail:gmail1,
                                                      age:age1,
                                                      gender:gender1,
                                                      profileVideo:profileVideo1}})
      res.json('updated')                                                
    }
    catch(e){
        res.json(e)
    }
}

const deleteProfileVideo = async (req,res)=>{
    const {userName,profileVideo2}=req.body
    try{
      await User.updateOne({userName:userName},{$set:{
                                                        profileVideo:profileVideo2
                                                    }})
      res.json('updated')                                                
    }
    catch(e){
        res.json(e)
    }
}
const deleteProfileImage = async (req,res)=>{
    const {userName,profileImage2}=req.body
    try{
      await User.updateOne({userName:userName},{$set:{
                                                        profileImage:profileImage2
                                                    }})
      res.json('updated')                                                
    }
    catch(e){
        res.json(e)
    }
}

const updateProfileImage = async (req,res)=>{
    const {userName,profileImage2}=req.body
    try{
      await User.updateOne({userName:userName},{$set:{
                                                         profileImage : profileImage2,
                                                    }})
      res.json('updated')                                                
    }
    catch(e){
        res.json(e)
    }
}

module.exports = {
    createNewUser,
    getOneUser,
    getAllUsers,
    getSingleUser,
    getSingleUsername,
    updateFollow,
    updateFollowedUsers,
    updateUnfollowedUsers,
    updateUnfollow,

    getVisitedUser,
    editProfile,
    deleteProfileVideo,
    deleteProfileImage,
    updateProfileImage
   }