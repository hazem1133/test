const multer = require('multer');
const path= require('path');

const fileFilter =(req,file,cb)=>{
    const ext = path.extname(file.originalname).toLocaleLowerCase();
    const allowed = ['.png','jpg','jpeg'];


if (!allowed.includes(ext)) {
    cb(new error('img only rr'),false);
}
cb(null,true);
}

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
      cb(null,'uploads')
    },
    filename:(req,file,cb)=>{
        cb(null,Date.name() + "_" + file.originalname);
    }
})

const MB = 1024 * 1024;
const upload = multer({
    storage,
    fileFilter,
    limits: MB * 2
})

module.exports={upload}