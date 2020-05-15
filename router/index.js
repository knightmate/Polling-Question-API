var express=require('express');
let router=express.Router();
let question=require('./questions');


router.use('/questions',question);
 

module.exports=router;
 