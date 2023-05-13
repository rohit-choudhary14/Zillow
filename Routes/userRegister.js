/* import the express*/
const express= require("express");
const userRoutes=express();
 /* import the body parser to get data*/
const bodyParser=require("body-parser");
 /*import the cookie parser to send response */
const cookieparser=require("cookie-parser");
userRoutes.use(cookieparser());
userRoutes.use(bodyParser.json());
userRoutes.use(bodyParser.urlencoded({extended:true}));
const userController=require("../Controller/user/userRegisterController")
const userCheckController=require("../Controller/user/userCheckController")
const userAuthController=require("../Controller/user/userAuthController")
userRoutes.post("/Auth",userAuthController);
userRoutes.post("/register",userCheckController,userController);
module.exports=userRoutes;