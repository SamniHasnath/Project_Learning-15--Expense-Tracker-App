const express = require("express");
const router = express.Router();
const pool = require("../db");

// Get all expenses
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM expenses ORDER BY created_at DESC");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add new expense
router.post("/", async (req, res) => {
  try {
    const { title, amount, category } = req.body;
    const result = await pool.query(
      "INSERT INTO expenses (title, amount, category) VALUES($1, $2, $3) RETURNING *",
      [title, amount, category]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete expense
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM expenses WHERE id = $1", [id]);
    res.json({ message: "Expense deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;