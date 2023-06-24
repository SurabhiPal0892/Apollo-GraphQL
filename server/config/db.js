const mongoose=require('mongoose');

const connectDB=async()=>{
    mongoose.set("strictQuery", false);
    const conn= await mongoose.connect(process.env.MONGOOSE_CONN_STR)
    console.log("mongo connected")
}

module.exports=connectDB