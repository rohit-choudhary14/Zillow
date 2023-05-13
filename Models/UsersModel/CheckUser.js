const mongoose=require("mongoose");

const userCheck=new mongoose.model("register");
const findData =async(req,res,next)=>{
    try{
        
       const email=req.body.email;
       const result=await userCheck.findOne({email:email});
        if(result!=null){
            res.send({"message":"Email is alredy in use"});
        }
        else{
          next();
        }

    }
    catch(error){
        console.log(error);
    }



}
module.exports=findData;