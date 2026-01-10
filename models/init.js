const mongoose=require("mongoose");
const initData=require("./data");
const Building=require("./schema");
const MONGO_URL="mongodb://127.0.0.1:27017/jiitscout";
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



async function initDb(){
await Building.deleteMany({});
await Building.insertMany(initData.data);
console.log("data initialised");
}
initDb();