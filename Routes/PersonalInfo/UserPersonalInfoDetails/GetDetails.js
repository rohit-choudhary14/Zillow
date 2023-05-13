const express=require("express");
const getDeatilsRoutes=express.Router();
const bodyParser=require("body-parser");
const userDetails=require("../../../Controller/user/UserPersonalInfoController/UsergetDeatilsController")
getDeatilsRoutes.use(bodyParser.json());
getDeatilsRoutes.use(bodyParser.urlencoded({extended:true}));
getDeatilsRoutes.post("/getUserDetails",userDetails);
module.exports=getDeatilsRoutes;