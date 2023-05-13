const mongoose=require("mongoose");


const registerSchema=new mongoose.Schema({

      email:{
        type:String,
        required:true
      }
     ,password:{
         type:String,
         required:true
     }
     ,landloard:{
         type:String,
         required:true
      },
      professional_type:{
        type:String
      },
      first_name:{
       type:String
      },
      last_name:{
        type:String
      },
      zip_code:{
        type:String
      },
      phone_number:{
        type:String
      }
})


const registerModel=new mongoose.model("register",registerSchema);

const registerUser = async(req,res)=>{
   try{
       const userData=new registerModel(req.body);
       let result=await userData.save();
       if(result){
          res.send({"message":"success"});
       }
   }
   catch(error){
      console.error(error);
   }


}


module.exports=registerUser;