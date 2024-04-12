import mongoose from "mongoose";
import { NextResponse } from "next/server";


const connectDb = async () => {
    try {
        mongoose.connect(process.env.MONGODB_URI!)
        const connection =  mongoose.connection


        connection.on('connected', () => {
            console.log('MongoDB connected')
        })

        connection.on('error', (err) => {
            console.log(`MongoDB connection error: ${err}`)
            process.exit()
        })
    } catch (error : any) {
        return NextResponse.json({ error: error.message });
    }
}

export default connectDb;