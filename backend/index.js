import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import router from './src/routes/routes.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 8000

const corsOptions = {
    origin: true
}

app.get('/', (req, res) => {
    res.send("Api is working")
})

// Database connection
mongoose.set('strictQuery', false)
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('MongoDB is connected');
    } catch (error) {
        console.log('MongoDB connection error: ' + error);
    }
}

// Middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))
app.use('/api/v1', router)

app.listen(port, () => { connectDB(), console.log('Server is running ' + port) })