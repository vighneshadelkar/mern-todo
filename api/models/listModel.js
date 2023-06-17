const mongoose=require('mongoose')

const listSchema=new mongoose.Schema({
    text:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('List',listSchema);