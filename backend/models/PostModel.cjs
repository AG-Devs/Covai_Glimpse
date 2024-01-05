const mongoose=require('mongoose')

const newPostSchema= new mongoose.Schema({
    id:{type:String,required:false},
    userName:{type:String,required:true},
    profileImages:{type:String,required:false},
    title:{type:String,required:true},
    message:{type:String,required:true},
    img:{type:String,required:false},
    dateTime:{type:String,required:true},
    likeCount:{type:Number,required:false},
    dislikeCount:{type:Number,required:false},
    postComment:{type:Array,required:true}
})

module.exports= mongoose.model('Posts',newPostSchema)