import express from 'express'
import colors from 'colors'
import cors from "cors";
import dotenv from 'dotenv'
import dbconnection from './config/dbcon.js';
import Users from './routes/userRoutes.js';
import Trips from './routes/tripRoutes.js'
import Booking from './routes/bookRoutes.js'
//rest object 
const app  =  express();
app.use(cors());


//Environment variables configuration
dotenv.config()
//database connection  establish
dbconnection()
app.use(express.json());
app.use("/uploads",express.static("./uploads"));
app.use("/api/auth", Users)
app.use("/api/book", Trips)
app.use("/api/trip", Booking)


const port = process.env.PORT


app.listen(port,()=>{
   console.log(`server is running at port http://localhost:${port}`.bgMagenta)
})