const express=require('express');
const port=200;
var mongoose=require('./config/mongoose');

const app=express();


app.listen(port, function(err)
{

    console.log('connected to ' , port);

});
