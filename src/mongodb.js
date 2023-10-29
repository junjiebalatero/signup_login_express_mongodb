const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/LoginSignupTutorial")
.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log('failed to connect');
})

const logInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection=new mongoose.model('Collection1',logInSchema)

module.exports=collection