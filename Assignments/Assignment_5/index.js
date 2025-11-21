const express = require('express');
const app =express();
const mongoose = require('mongoose')

const userRouter=require('./router/StudentRouter');
const port =8000;
mongoose.connect("mongodb+srv://myAtlasDBUser:root@myatlasclusteredu.qk2tejs.mongodb.net/?appName=myAtlasClusterEDU")
.then(()=>{
    console.log("connected to DB 🍃");
})
.catch((err)=>{
    console.log(err);
});

//Middleware
app.use(express.json());

app.use(userRouter);
app.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`);

});