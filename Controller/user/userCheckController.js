/* making path to find user model*/
const path=require("path");
const direname=path.join(__dirname,"../");
const toDb=path.join(direname,"../");
const toModel=path.join(toDb,"/Models/UsersModel/")
/*import the user model*/
const userCheckModel=require(`${toModel}\CheckUser`);


module.exports=userCheckModel;
