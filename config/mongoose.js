var mongoose=require('mongoose');

 var mon= mongoose.connect('mongodb://localhost/polling', function(err){
       
      if(err)
     console.log(err);
     else
     console.log("connected to db");


 });


module.exports=mongoose;
 