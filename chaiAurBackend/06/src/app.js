import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()
app.use(cors({
    origin: process.eventNames.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))

export { app }