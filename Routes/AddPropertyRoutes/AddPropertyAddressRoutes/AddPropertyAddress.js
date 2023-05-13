const addPropertyAddressRoutes=require("express")();
const bodyParser=require("body-parser");
const AddPropertyAddressController=require("../../../Controller/AddPropertyController/AddAddressController/AddAddressController")
addPropertyAddressRoutes.use(bodyParser.json());
addPropertyAddressRoutes.use(bodyParser.urlencoded({extended:true}));
addPropertyAddressRoutes.post("/addPropertyAddress",AddPropertyAddressController);
module.exports=addPropertyAddressRoutes;