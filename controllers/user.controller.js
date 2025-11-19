const User = require ('../routes/models/user.model');

exports.addUser = async(req,res)=>{
 const {name,password,email,role} = req.body;
 const user = await User.create({name,email,password,role});
 res.status(201).json({message:'add new user',data:user});
}


