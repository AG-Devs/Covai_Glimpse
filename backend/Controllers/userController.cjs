const User=require('../models/SignModel.cjs')

const createNewUser = (req,res)=>{
    const signedupUser=new User({
        name:req.body.name,
        password:req.body.password
    })
    signedupUser.save()
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            res.json(err)
        })
}

const getAllUsers= async (req,res)=>{
    try{
    const user = await User.find({});
    res.send({data:user})
    }
    catch(err){
        console.log(err)
    }
}

module.exports = {
    createNewUser,
    getAllUsers
   }