const express=require("express");
const mongoose=require("mongoose");
const route= require("./routes/route");
const con=require("./config")
const app=express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());



app.use("/", route)

app.listen(process.env.PORT || 5000,()=>{
    console.log("express is running on Port "+(process.env.PORT || 5000)) 
})