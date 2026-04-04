// server/server.js
const express = require("express");
const cors = require("cors");
const pool = require("./db");
const expenseRoutes = require("./routes/expenseRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Allows us to catch req.body as JSON

// Routes
app.use("/api/expenses", expenseRoutes);

// Test Route to ensure DB is connected
app.get("/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ message: "Database Connected!", time: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: "Database connection failed" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});