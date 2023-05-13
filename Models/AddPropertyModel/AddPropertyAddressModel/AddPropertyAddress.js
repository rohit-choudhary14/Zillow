const mongoose=require("mongoose");
const addPropertyAddressSchema=new mongoose.Schema({
        prop_id:{
          type:String,
          required:true
        },
        email:{
            type:String,
            required:true
        },
        streetaddress:{
            type:String,
            required:true
        },
        prop_type:{
            type:String,
            required:true
        },
        unit_number:{
            type:Number,
            required:true
        },
        isRoomForRent:{
            type:String
        }
})
const AddPropertyAddressModel=new mongoose.model("zillorentalmanageraddress",addPropertyAddressSchema);
const addPropertyAddress=async(req,res)=>{
    try{
        let data=new AddPropertyAddressModel(req.body);
        let result=await data.save();
        if(result){
            res.send({"message":"address added successfully"});
        }else{
            console.log("we have a problem to add your property address")
        }
    }catch(e){
        console.log(e);
    }
}
module.exports={
    PropertAddresFun:addPropertyAddress,
    ConnectionModel:AddPropertyAddressModel
};