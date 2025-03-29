// require('dotenv').config({path: './env'});
import dotenv from "dotenv"
import connectDB from "./db/index.js"
import { app } from "./app.js"
dotenv.config({
    path: './.env'
})

// Second Approach:- 
connectDB()
.then(() => {
    app.listen(process.env.PORT || 9000, () => {
        console.log(`@ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})




/* First Approach:- 
import mongoose from "mongoose";
import { DB_NAME } from "./constants"

import express from "express"
const app = express()

// if the last block just before 'IIFE (Immediately Invoked Function Expession)' does not contain semi-colon then there may occur error, so use semi-colon just before using 'IIFE'; 
;( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (error) => {
            console,log("ERROR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch(error) {
        console.log("ERROR: ", error);
        throw err
    }
})
*/