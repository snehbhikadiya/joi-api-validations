const express=require('express');
const route=express.Router();
const student=require('./student');
const club=require('./club');

route.use('/student',student);
route.use('/club',club);

module.exports=route;