/* making path to find Add property model*/
const path=require("path");
const direname=path.join(__dirname,"../");
const toDb=path.join(direname,"../../");
console.log(toDb);
const toModel=path.join(toDb,"/Models/AddPropertyModel/BasicDetailsModel/")
/*import the add property  model*/
console.log(toModel);
const addPropertyModel=require(`${toModel}\BasicDetailsModel`);
module.exports=addPropertyModel;