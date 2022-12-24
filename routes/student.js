const express=require('express');
const route=express.Router();
const studentController=require('../controller/studentController');
const validater=require('../utils/requestvalidation');

route.get('/',studentController.getstudet);
route.get('/:id',studentController.getOnestudet);
route.post('/',validater('student'),studentController.createStudent);
route.put('/:id',studentController.updateStudent);
route.delete('/:id',studentController.deleteStudent);

// commet added 

module.exports=route;