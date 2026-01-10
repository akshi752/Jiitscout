const express=require("express");
const PORT=8080;
const mongoose=require("mongoose");
const MONGO_URL="mongodb://127.0.0.1:27017/jiitscout";
const path=require("path");
const app=express();
const ejsMate=require("ejs-mate");
const Building=require("./models/schema");


main()
.then(()=>{
    console.log("mongodb connection successful");
})
.catch((err)=>{
    console.log(err);
})
async function main(){
    await mongoose.connect(MONGO_URL);
}
//setting up ejs views folder and public folder path
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"./public")));
app.engine("ejs",ejsMate);


app.listen(PORT,()=>{
    console.log(`PORT ${PORT} is listening`);
})
app.get("/",async (req,res)=>{
    let buildings=await Building.find();
    res.render("home",{buildings});
})
