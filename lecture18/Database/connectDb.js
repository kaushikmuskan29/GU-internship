import mongoose from "mongoose";

export const connectDb = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URL);
        console.log("Mongo DB connected", )
    }
    catch(err){
        console.log("Mongo DB not connected", err.message)
        process.exit(1);
    } 
}
