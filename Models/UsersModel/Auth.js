const mongoose=require("mongoose");
const AuthModel=new mongoose.model("register");
const Auth=async(req,res)=>{
    try{
     console.log(req.body);        
      let email=req.body.email;
      let password=req.body.password;
      let result=await AuthModel.findOne({email:email},{password:1});
      if(result){
          if(result.password===password){
             res.cookie('zillow', email, { maxAge: 3600000});
             res.send({
               "message":"success",
             });
           
          }
          else{
             res.send({"message":"Password mismatch"})
          }
      }
      else{
           res.send({"message":"Please enter a valid email.."});
      }
     
     
 
    }catch(error){
     console.log(error);
    }
 }
module.exports=Auth;