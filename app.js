require('dotenv').config();
require('./config/db');
const express=require('express');
const port=3000;
const app=express();
const index=require('./routes/index');
const swaggerUi=require('swagger-ui-express');
const  swaggerDocument=require('./swagger.json');


app.use(express.json({limit:'43mb'}));
app.use('/api',index);
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocument));

app.listen(port,()=>
{
    console.log(`server start on ${port}`);
})