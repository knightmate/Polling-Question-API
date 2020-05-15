var question=require('../model/question');
var options=require('../model/options');

module.exports.addQuestion=function(req,res){


    var {title ,id}=req.body;

  question.create({
        id:id,
       title:title,
   
    }).then( (result)=>{
     console.log(result);

     return res.send(200, {
        success: true,
        count: result.length,
        data: result
     });
      
 })
 .catch((error=>{
     
    console.log(error)
    
    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || "Server Error"
      });
    
    }
 ));

}




//adding options
module.exports.addOption=function(req,res){

 
    var {title ,id}=req.body;

  options.create({
        id:id,
       title:title,
   
    }).then( (result)=>{
     console.log(result);

     question.findOne(id=req.param.id, function(err, user){


        if(err)
        return res.send(err);
         

         console.log(req.body.id);
       question.findOneAndUpdate({id: req.params.id}, { $push:{options:result._id} }, function(err,user){
        
        if(err)
        {
            
            console.log(err);

        }
        console.log('optiondata',user);
            
        }); 


         return res.send(200,{
             success:true,
             res:"Option added sucessfully",
         });
     });

     
      
 })
 .catch((error=>{
     
    console.log(error)
    
    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || "Server Error"
      });
    
    }
 ));

}



//delete Question



module.exports.deleteQuestion= async function(req,res){

 
    //var {title ,id}=req.body;
    
    try{
        
    let q=await question.findOne({id:req.params.id}).populate('options');
          let opt=q.options;
        
          console.log('option object',opt);

          if(opt)
          for(obj of  opt)
         {
          
            console.log('inside for loop', obj._id);
           
            if(obj.vote>0)
            {
                console.log('cannot delte the Question bcz of vote > 0', obj.vote);
                  res.send(
                    { 
                    success:false,
                     msg:'cannot delte the Question because of vote > 0',
                     obj:obj,
                    }

                 )
            }else{

                if(obj.vote===0)
                {
                    await options.findOneAndDelete({_id:obj._id},function(err,option){

                        if(err)
                        return res.send(err);
                       else
                       console.log('deleting option in Q',option);
        
                 
                 })

                }

                let t =await question.findOneAndRemove({id:req.params.id}).populate('options');

        res.send({
            success:true,
            msg:"Deleted",
            obj:t
        })
 

            }
           

        }
                 
         

                
    

    }catch(err)
    { 
        console.log(err);
        return res.send(err);

    }
  
}



module.exports.getQuestion= async function(req,res){

       
    try{
       let q=await question.findOne({id:req.params.id}).populate('options');

         if(q)
         {
             res.send(
            {
              success:true,
              question:q
          }
      );

         }else
         {
             res.send('no user found');
         }
         

    }catch(err)
    {
        console.log(err);
        res.send(err);
        
    }

        
    



}


//add Vote


module.exports.addVote= async function(req,res){


    try{
  let vote=await options.findOneAndUpdate({id:req.params.id}, {$inc : {'vote' : 1}});

    if(vote)
    { 
   return res.send(vote);
        
    }else
    res.send({
        success:false,
         obj:vote
    });

}catch(err)
{
    res.send(err);
}


}