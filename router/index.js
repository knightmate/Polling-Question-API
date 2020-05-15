var express=require('express');
let router=express.Router();
let question=require('./questions');


router.post('/questions', question);
//router.use('/question', question);

module.exports=router;