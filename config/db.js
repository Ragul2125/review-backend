import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGOURL);
        console.log('Connected to MongoDB successfully');
    } catch (err) {
        console.error('Database connection error:', err.message);
        process.exit(1);
    }
};

export default connectDB;
