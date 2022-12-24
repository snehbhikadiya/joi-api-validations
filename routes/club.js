const express=require('express');
const route=express.Router();
const clubController=require('../controller/clubController');

route.get('/',clubController.getClubStudet);
route.get('/:id',clubController.getOneClubstudet);
route.post('/',clubController.createClubStudent);
route.put('/:id',clubController.updateClubStudent);
route.delete('/:id',clubController.deleteClubStudent);



module.exports=route;