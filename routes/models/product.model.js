
const mongoose = require('mongoose')
const productSchema= new mongoose.Schema({
    name:{type:String,required:true},
    desc:String,
    price:Number,
    imgURL:String,
    stock:Number,
    isdeleted:{type:Boolean,default:false},
    slug:{type:String, required:true, unique:true},
    
},
{
timestamps:true
}

)
module.exports = mongoose.model('product',productSchema);