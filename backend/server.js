const express = require("express");
const dotenv = require("dotenv");

// const connectDB = require("./config/db");

dotenv.config();

// connectDB();

const app = express();

app.use(express.json());

// Import Routes
const healthRoutes = require("./routes/healthRoutes");
const careerRoutes = require("./routes/careerRoutes");
// Routes
app.use("/", healthRoutes);
app.use("/api/careers", careerRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});