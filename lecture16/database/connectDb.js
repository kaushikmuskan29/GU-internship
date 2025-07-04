import mongoose from "mongoose"
export const conectDb = async() => {
    try{
        console.log(process.env.MONGO_URL,'ashasgasah')
        const conn = await mongoose.connect("mongodb+srv://kaushikmuskan2006:muskan000@cluster0.kj25fy4.mongodb.net/fullstack")
        console.log(`MongoDB connected ${conn.connection.host}`)
    }
    catch(error){
        console.log(`Error connecting MongoDB ${error.message}`)
        process.exit(1);
    }
}