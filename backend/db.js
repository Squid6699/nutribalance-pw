import mongoose from "mongoose";

export async function connectDB() {
    try {
        await mongoose.connect(process.env.HOST_DB + ':' + process.env.PUERTO_DB + '/' + process.env.DB);
        console.log('Connected to MongoDB successfully');
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
    }
}