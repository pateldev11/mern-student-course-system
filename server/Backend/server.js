import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import studentRoutes from './routes/studentRoutes.js';
import courseRoutes from './routes/courseRoutes.js';

dotenv.config();  // This must be at the top to load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration to allow frontend requests with credentials (cookies)
const corsOptions = {
    origin: 'http://localhost:3000',  // Frontend URL
    credentials: true,                // Allow credentials (cookies, headers)
};

app.use(cors(corsOptions));  // Use the configured CORS middleware
app.use(express.json());
app.use(cookieParser());

app.use('/api/students', studentRoutes);
app.use('/api/courses', courseRoutes);

const startServer = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
};

startServer();
