const User=require('../models/SignModel.cjs')

const createNewUser = async(req,res)=>{
        
            const {id,name,createPassword,mobilenumber,gender,age,gmail,profileImage,profileVideo,totalPosts,totalLikes,followers,likedPosts,dislikedPosts,commentedPosts} = req.body
            
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
                        totalPosts:totalPosts,
                        totalLikes:totalLikes,
                        followers:followers,
                        likedPosts:likedPosts,
                        dislikedPosts:dislikedPosts,
                        commentedPosts:commentedPosts
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

const getAllUsers = async (req,res)=>{
    try{
        const data = await User.find({})
        res.send({data:data})
    }
    catch(e){
        res.json('error')
    }   
}

module.exports = {
    createNewUser,
    getOneUser,
    getAllUsers,
    getSingleUser
   }