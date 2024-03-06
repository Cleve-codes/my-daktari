import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"

import authRoutes from "./Routes/auth.js"
import userRoutes from "./Routes/user.js"
import doctorRoutes from "./Routes/doctor.js"
import reviewRoutes from "./Routes/review.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 8000

const corsOptions = {

}

app.get("/", (req, res) => {
  res.send("Api working")
})

// Database connection
mongoose.set("strictQuery", false)
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    })
    console.log("MongoDB connection success")
  } catch (error) {
    console.error("MongoDB connection failed")
    process.exit(1)
  }
}


// Middlewares
app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))
app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/users", userRoutes)
app.use("/api/v1/doctors", doctorRoutes)
app.use("/api/v1/reviews", reviewRoutes)


app.listen(PORT, () => {
  connectDB()
  console.log("Server is running" +   PORT)
})