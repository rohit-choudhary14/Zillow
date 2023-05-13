const clearCookie = async (req,res)=>{
     try{
        res.clearCookie("zillow");
        res.send({"message":"cleared"})
       
     }catch(e){
        console.log(e);
     }



}
module.exports=clearCookie;