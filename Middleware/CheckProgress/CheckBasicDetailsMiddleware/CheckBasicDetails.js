const checkBasicDetailsModel=require("../../../Models/CheckProgressModel/CheckBasicDetailsModel/CheckBasicDetailsModel");
const checkAddressModel=require("../../../Models/AddPropertyModel/AddPropertyAddressModel/AddPropertyAddress").ConnectionModel;
const checkBasicDeatilsMiddleware =async(req,res,next)=>{

    try{
             
        let email=req.body.email;
        let result=await checkBasicDetailsModel.findOne({email:email},{_id:1});
        // 
        // console.log(id,typeof id);
        if(result!=null){
            let id=result._id;
            let data=await checkAddressModel.findOne({prop_id:id});
            if(data){
                res.send({"message":"We found address as well"});
            }
            else{
                res.send({"message":"AddressNUll",id});
            }
           
        }
        else{
            console.log("No record ");
            res.send({"message":"Null"})
        }

    }catch(e){
        console.log(e);
    }


}
module.exports=checkBasicDeatilsMiddleware;