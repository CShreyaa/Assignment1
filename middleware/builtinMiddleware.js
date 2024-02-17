//Utilize built-in middleware like express.json() for parsing JSON requests
const express=require('express');
const builtinMiddleware=express();

builtinMiddleware.use(express.json());
builtinMiddleware.use(express.urlencoded({extended:true}));

builtinMiddleware.get('/built',(req,res)=>{
    res.send(req.body);
});

builtinMiddleware.post('/built',(req,res)=>{
    res.send(req.body);
});

module.exports=builtinMiddleware;