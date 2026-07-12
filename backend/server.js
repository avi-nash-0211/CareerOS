const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

// const connectDB = require("./config/db");

dotenv.config();

// connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Import Routes
const healthRoutes = require("./routes/healthRoutes");
const careerRoutes = require("./routes/careerRoutes");
const authRoutes = require("./routes/authRoutes");
// Routes
app.use("/", healthRoutes);
app.use("/api/careers", careerRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});