const Post=require('../models/PostModel.cjs')

const newPost= async (req,res)=>{
    const {id,userName,profileImage4,title,message, img, dateTime, likeCount, dislikeCount, postComment} = req.body

    const data = {
        id:id,
        userName:userName,
        profileImage : profileImage4,
        title:title,
        message:message,
        img:img,
        dateTime:dateTime,
        likeCount:likeCount,
        dislikeCount:dislikeCount,
        postComment:postComment
    }

    try{
        await Post.insertMany([data])
        res.send('done')
    }
    catch(err){
        console.log(err)
    }
}

const updatePost = async (req,res)=>{
    const {id,like,dislike,postComment} = req.body
    try{
        await Post.updateOne({id:id},{
            $set:{
                likeCount:like,
                dislikeCount:dislike,
                postComment:postComment
            }
        })
        res.json('done')
    }
    catch(err){
        res.json('error')
    }
}
const updateFeedImage = async (req,res)=>{
    const {userName,profileImage6}=req.body
    try{
      await Post.updateMany({userName:userName},{$set:{
                                                         profileImages : profileImage6,
                                                    }})
      res.json('updated')                                                
    }
    catch(e){
        res.json(e)
    }
}

const deletePost = async (req,res)=>{
    const {name1,id} = req.body
    try{
        await Post.deleteOne({id:id,userName:name1})
    }
    catch(err){
        res.json('error')
    }
}

const getAllPosts = async (req,res)=>{
    try{
        const data = await Post.find({})
        res.send({data:data})
    }
    catch(e){
        res.json('error')
    }   
}

module.exports = {
        newPost,
        updatePost,
        updateFeedImage,
        deletePost,
        getAllPosts
}