//Utilize built-in middleware like express.json() for parsing JSON requests
const express=require('express');
const builtinMiddleware=express();

builtinMiddleware.use(express.json());
builtinMiddleware.use(express.urlencoded({extended:false}));

builtinMiddleware.get('/built',(req,res)=>{
    res.json({message:"Get all details"});
});

builtinMiddleware.post('/built',(req,res)=>{
    console.log("This is the request body received from client",req.body)
    res.json({message:"New details created"});
});

module.exports=builtinMiddleware;