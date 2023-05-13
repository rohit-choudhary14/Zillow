const express=require("express");
const setDeatilsRoutes=express.Router();
const bodyParser=require("body-parser");
const UserPIM=require("../../../Controller/user/UserPersonalInfoController/UserSetDetailsController")
setDeatilsRoutes.use(bodyParser.json());
setDeatilsRoutes.use(bodyParser.urlencoded({extended:true}));
setDeatilsRoutes.post("/set",UserPIM);
module.exports=setDeatilsRoutes;