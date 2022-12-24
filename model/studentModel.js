const mongoose=require('mongoose');
const Schema=mongoose.Schema



const mongooseSchma=new Schema({
    name:String,
    id:String,
    division:String,
    club:{
        type:Schema.Types.ObjectId,
        ref:'club'
    }
})

const mongooseModel=mongoose.model('Student_2',mongooseSchma);


module.exports=mongooseModel;