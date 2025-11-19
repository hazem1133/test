const mongoose =require('mongoose');
const express = require('express');
const router = express.Router();
const {upload} = require('../midlewares/uploads.midleware')
const { type } = require("os");
const {getAllProducts,addProduct,getProdctByslug,deleteProduct} = require('../controllers/controler');
router.get('/',getAllProducts);
router.get('/:slug',getProdctByslug);

router.post('/',upload.single('img'),addProduct);

router.delete('/:id',deleteProduct);

module.exports= router;