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
    profileVideo:{type:String,required:false}
})

module.exports= mongoose.model('users',signupSchema)