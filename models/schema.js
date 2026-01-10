const mongoose=require("mongoose");
const Schema= mongoose.Schema;
const buildingSchema=new Schema({
name:{
    type:String,
    required:true
},
desc:{
    type:String,
    required:true,
},
image:{
    url:{
        type:String,
        default:"/images/default.jpeg",
        set:(v)=>v===""?"/images/default.jpeg":v,
    }
}
});

const Building=mongoose.model("Building",buildingSchema);

module.exports=Building;