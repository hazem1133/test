const mongoose=require('mongoose');
const purchaseSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'product',
        required:true
    },
    price:Number,
    quantity: Number,
    purchaseAt:{
        type:Date,
        default:Date.now
    }

},
{
    timestamps:true
})

module.exports = mongoose.model('purchase',purchaseSchema);