var express=require('express');
let router=express.Router();


router.post('/create', question);

router.post('/:id/options/create', question);
router.get('/:id/delete', );
router.get('/:id/add_vote', );
router.get('/:id', );


 

module.exports=router;