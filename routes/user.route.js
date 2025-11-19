const {addUser} = require('../controllers/user.controller');
const express = require ('express');
const mongoose = require('mongoose');
const router = express.Router();

router.post('/',addUser);

module.exports=router;