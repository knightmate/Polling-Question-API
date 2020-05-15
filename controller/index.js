var question=require('../model/question');

module.exports.addQuestion=function(req,res){

    var {title}=req.body;

 let p=question.create({
     
    title:title,

 });

 p.then( result=> {
     console.log(result);
     return res.status(200, JSON{
        success: true,
        count: result.length,
        data: result
     })
 },
 error=>{
     
    console.log(error)
    
    return res.send(error);
    
    }
 );





}