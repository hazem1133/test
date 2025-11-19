const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role:{
        type:String,
        enum:['admin','user']
    }
},
{
    timestamps:true
});

module.exports = mongoose.model('user',userSchema);
