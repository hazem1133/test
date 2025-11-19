const multer = require('multer');
const product = require('../routes/models/product.model')


//getAll
exports.getAllProducts = async(req,res)=>{
    const products = await product.find({isdeleted:false});
    res.status(200).json(products);
}

//get by slug
exports.getProdctByslug= async(req,res)=>{
    const slug = req.params.slug;
    const product = await product.findOne({slug});
    if (product) {
        res.status(200).json({message:`product(${info})`,data:product});
    }
    else{
        res.status(404).json({message:`product not found`});
    }
}




//create product
exports.addProduct = async(req,res)=>{
    const {name,desc,price,stock}=req.body;
    const imgURL= req.file.filename;
    const product = await product.create({name,desc,price,stock,imgURL});
    res.status(201).json({message:'product created',data:product})
}



exports.deleteProduct=async(req,res)=>{
    const id = req.params.id;
    const product = await product.findByIdAndUpdate(id,{isdeleted:true});

    if (product) {
        res.status(200).json({message:'product deleted',data:product})
    }
    else{
        res.status(404).json({message:`product not found`});
        
    }
}