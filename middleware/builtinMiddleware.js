//Utilize built-in middleware like express.json() for parsing JSON requests
const express=require('express');
const builtinMiddleware=express();

builtinMiddleware.use(express.json());
builtinMiddleware.use(express.urlencoded({extended:true}));

module.exports=builtinMiddleware;