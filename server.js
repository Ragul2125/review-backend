import express from "express";
import dotenv from "dotenv";
import cors from "cors"; // Import cors
import connectDB from "./config/db.js";
import router from './routes/route.js';

dotenv.config();

const app = express();

// Enable CORS with default settings (allows all origins)
app.use(cors());

// Parse JSON requests
app.use(express.json());

// Connect to database
connectDB();

app.get("/", (req, res) => res.send("API is running perfectly!"));

// Use the router for API routes
app.use('/api', router);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
