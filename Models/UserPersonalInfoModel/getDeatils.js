const mongoose=require('mongoose');
const userDeatilsModel=new mongoose.model("userPersonalInfo");
const sendData=async(req,res)=>{
    try{
        let email=req.body.email;
        console.log(email)
        let result=await userDeatilsModel.findOne({email},{firstname:1,lastname:1,_id:0});
        if(result){
            console.log(result)
            res.send(result);
            
        }
        
       }catch(e){
          console.log(e);
         
       }
}
module.exports=sendData;