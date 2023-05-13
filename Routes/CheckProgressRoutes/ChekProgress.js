const checkProgressRoutes=require("express")();
const bodyParser=require("body-parser");
const checkBasicDeatilsMiddleware=require("../../Middleware/CheckProgress/CheckBasicDetailsMiddleware/CheckBasicDetails")
checkProgressRoutes.use(bodyParser.json());
checkProgressRoutes.use(bodyParser.urlencoded({extended:true}));
checkProgressRoutes.post("/checkProgress",checkBasicDeatilsMiddleware);
module.exports=checkProgressRoutes;