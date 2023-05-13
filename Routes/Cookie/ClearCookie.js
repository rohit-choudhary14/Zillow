/* import the express*/
const express= require("express");
const clearCookie=express();
 /* import the body parser to get data*/
const bodyParser=require("body-parser");
clearCookie.use(bodyParser.json());
clearCookie.use(bodyParser.urlencoded({extended:true}));
const clearCookieController=require("../../Controller/Cookie/clearCookieController")
clearCookie.post("/signout",clearCookieController);
module.exports=clearCookie;