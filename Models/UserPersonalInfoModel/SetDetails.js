const mongoose=require("mongoose");
const userDeatilsschema=new mongoose.Schema({
        firstname:{
         type:String
        },
        lastname:{
            type:String
        },
        email:{
            type:String,
            required:true,
            lowercase:true
        }
});
const userDeatilsModel=new mongoose.model("userPersonalInfo",userDeatilsschema);
const setDeatils = async(req,res)=>{
        try{

            let email=req.body.email;
            console.log(email)
            let result=await userDeatilsModel.findOne({email:email})
            if(result!=null){
                 let data={firstname:req.body.firstname,lastname:req.body.lastname}
                 let updateDate=await userDeatilsModel.updateOne({email:email},{$set:data})
                 res.send({"Message":"updated"});
            }else{
                //insert deatils
                let data=new userDeatilsModel(req.body);
                let result=await data.save();
                if(result){
                    console.log(result)
                    res.send({"Message":"success"});
                    
                }
            }

        }catch(e){
            console.error(e);
        }


}
module.exports=setDeatils;