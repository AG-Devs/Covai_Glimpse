const Post=require('../models/PostModel.cjs')

const newPost= async (req,res)=>{
    const {id,userName,title,message, img, dateTime, likeCount, dislikeCount, postComment} = req.body

    const data = {
        id:id,
        userName:userName,
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
        getAllPosts
}