const BasicDetailsRoutes=require("express")()
const bodyParser=require("body-parser");
const BasicDetailsController=require("../../../Controller/AddPropertyController/BasicDetailsController/BasicDetailsController")
BasicDetailsRoutes.use(bodyParser.json());
BasicDetailsRoutes.use(bodyParser.urlencoded({extended:true}));
BasicDetailsRoutes.post("/addPropertyBasicDetailsFormData",BasicDetailsController);
module.exports=BasicDetailsRoutes;