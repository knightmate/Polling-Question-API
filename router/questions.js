var express=require('express');
let router=express.Router();
var controller=require('../controller/index');

 
router.post('/create', controller.addQuestion);

router.post('/:id/options/create',controller.addOption);

 
router.get('/:id/delete',controller.deleteQuestion);

router.get('/:id/add_vote',controller.addVote);

 router.get('/:id', controller.getQuestion );


 

module.exports=router;