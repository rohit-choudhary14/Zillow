const mongoose=require("mongoose");
const basicDetailsSchema=new mongoose.Schema({
    email:{
       type:String,
       required:true
    },
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    numberOfProperties:{
        type:Number,
        required:true

    },
    profession:{
        type:String,
        required:true
    }
})
const BasicDetailsModel=new mongoose.model("ZilloRentalManagerBasicDetails",basicDetailsSchema);
const BasicDetailsSaveDataApi=async(req,res)=>{
    try{
        let data=req.body;
        data=new BasicDetailsModel(data);
        let result=await data.save();
        console.log(result);
        let id=result._id;
        res.send({"message":"Your Progress has been saved",id});
        


    }catch(e){
     console.log(e);
    }
}
module.exports=BasicDetailsSaveDataApi;