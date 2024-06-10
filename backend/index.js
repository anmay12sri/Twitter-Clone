import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./config/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoutes.js"
import tweetRoutes from "./routes/tweetRoutes.js"

dotenv.config({
    path: ".env"
})
databaseConnection();
const app=express();

app.use(express.urlencoded({
    extends:true
}));
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/user",userRoute)
app.use("/api/v1/tweet",tweetRoutes)

// app.get("/home",(req,res)=>{
//   res.status(200).json({
//     message:"coming from backend... "
//   })
// }) 


 

app.listen(process.env.PORT,()=>{
    console.log(`Server running at port ${process.env.PORT}`);
})