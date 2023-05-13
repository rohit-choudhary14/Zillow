const express=require("express");
const app=express();
const cors = require("cors");
const mongodbConnection=require("./Models/ConnectionModel/Config");
const userRoutes=require("./Routes/userRegister"); 
const BsrDetails =require("./Routes/BsrDetails");
const UserPIM =require("./Routes/PersonalInfo/UserPersonalInfoDetails/SetDeatils");
const userGetDeatils=require("./Routes/PersonalInfo/UserPersonalInfoDetails/GetDetails")
const clearCookie=require("./Routes/Cookie/ClearCookie")
const BasicDetailsRoutes=require("./Routes/AddPropertyRoutes/BasicDetailsRoutes/BasicDetailsRoutes")
const addPropertyAddressRoutes=require("./Routes/AddPropertyRoutes/AddPropertyAddressRoutes/AddPropertyAddress")
const checkProgressRoutes=require("./Routes/CheckProgressRoutes/ChekProgress")
let corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
};
app.use(cors(corsOptions));
app.use(userRoutes);
app.use(BsrDetails);
app.use(UserPIM);
app.use(userGetDeatils);
app.use(clearCookie);
app.use(checkProgressRoutes);
app.use(BasicDetailsRoutes);
app.use(addPropertyAddressRoutes);
const port=process.env.PORT || 3001;
app.listen(port,()=>{
    mongodbConnection();
    console.log(`Server listening at port ${port}`);
})