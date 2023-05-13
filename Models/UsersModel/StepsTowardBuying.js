const mongoose=require("mongoose");
const BsrDetailsModel=new mongoose.model("register");
const BsrDetails=async(req,res)=>{
    try{
         let data= await BsrDetailsModel.findOne({email:req.body.email})  
        
         if(data){
          
            if(data.landloard=="off"){
                res.send({"message":"off"}); 
                
            }
         }
        

    }catch(error){
     console.error(error);
    }
 
 }
module.exports=BsrDetails;