/* making path to find user model*/
const path=require("path");
const direname=path.join(__dirname,"../");
const toDb=path.join(direname,"../");
const toModel=path.join(toDb,"/Models/UsersModel/")

/*import the user model*/
const registerUserModel=require(`${toModel}\RegisterModel`);


module.exports=registerUserModel;