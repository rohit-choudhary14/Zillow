const mongoose=require("mongoose");

const mongodbConnection = async()=>{
    try{
         
        const result=await mongoose.connect("mongodb://127.0.0.1:27017/Zillow");
        console.log("connection extablished");
       

    }catch(error){
        console.error(error);
    }


}

module.exports=mongodbConnection;
