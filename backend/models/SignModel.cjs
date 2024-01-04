const mongoose=require('mongoose')

const signupSchema= new mongoose.Schema({
    id:{type:Number,required:true},
    userName:{type:String,required:true},
    password:{type:String,required:true},
    mobilenumber:{type:Number,required:false},
    gender:{type:String,required:false},
    age:{type:String,required:false},
    gmail:{type:String,required:false},
    profileImage:{type:String,required:false},
    profileVideo:{type:String,required:false},
    followers:{type:Number,required:false},
    likedPosts:{type:Array,required:false},
    dislikedPosts:{type:Array,required:false},
    commentedPosts:{type:Array,required:false},
    followedUser:{type:Array,required:false},
    messages:{type:Array,required:false}
})

module.exports= mongoose.model('users',signupSchema)
