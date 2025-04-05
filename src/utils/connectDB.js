import { mongoose } from "mongoose"
export default async function connectDB(){
    if(mongoose.connections[0].readeState) return ;
    await mongoose.connect(process.env.MONGO_URI)
    console.log("connected to DB")
}