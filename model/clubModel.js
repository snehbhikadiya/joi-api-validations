const mongoose=require('mongoose');
const Schema=mongoose.Schema

const clubSchema =new Schema({
    clubtype:{type:String},
    fees:{type:String},
    day:{type:String}
})

const productModel=mongoose.model('club',clubSchema);

module.exports=productModel;