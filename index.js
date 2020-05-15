const express=require('express');
const port=200;
var mongoose=require('./config/mongoose');
var bodyparser=require('body-parser');
var router= require('./router');
const app=express();

//app.use(express.json()); 
app.use(bodyparser.urlencoded());

app.use('/', router);


app.listen(port, function(err)
{

    console.log('connected to ' , port);

});
