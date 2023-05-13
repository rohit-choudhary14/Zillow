/* import the express*/
const express= require("express");
const BsrDetails=express();
 /* import the body parser to get data*/
const bodyParser=require("body-parser");
BsrDetails.use(bodyParser.json());
BsrDetails.use(bodyParser.urlencoded({extended:true}));
const BsrDetailsController=require("../Controller/user/BsrDetails")
BsrDetails.post("/findBsr",BsrDetailsController);
module.exports=BsrDetails;