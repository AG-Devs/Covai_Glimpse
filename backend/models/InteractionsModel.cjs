const mongoose=require('mongoose')

const interactionSchema= new mongoose.Schema({
    id:{type:String,required:false},
    userName:{type:String,required:true},
    likedPosts:{type:Array,required:false},
    disLikedPosts:{type:Array,required:false},
    commentedPosts:{type:Array,required:false}
})

module.exports= mongoose.model('userInteractions',interactionSchema)