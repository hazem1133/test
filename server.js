const dotenv=require("dotenv");
dotenv.config(); 
const path= require('path');
const express = require("express");
const app = express();
app.use(express.json());
app.use('/uploads',express.static(path.join(__dirname,'uploads')));

const connectDB = require('./config/DB.config')
connectDB();

app.use('/product',require('./routes/product.route'));
app.use('/user',require('./routes/user.route'));

const port = process.env.PORT;
app.listen(port,()=>{
  console.log(`server started at ${port}`);
  
})

