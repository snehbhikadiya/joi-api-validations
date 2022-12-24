const mongoose=require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL).then(()=>
{
    console.log('data-base created');
}).catch((err)=>
{
    console.log(err);
})