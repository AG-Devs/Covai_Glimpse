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

const updatePost = async (req,res)=>{
    const {name1,like,dislike,postComment} = req.body
    try{
        await Post.updateOne({userName:name1},{
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
        deletePost,
        getAllPosts
}