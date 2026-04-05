import { useState } from "react";
import axios from "axios";

export default function ExpenseForm({ refresh }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!title || !amount) return alert("Please fill in all fields");

    try {
      await axios.post("http://localhost:5000/api/expenses", { title, amount, category });
      refresh();
      setTitle(""); setAmount("");
    } catch (err) { console.error(err); }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="What did you buy?" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="number" placeholder="How much?" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Food">🍔 Food & Dining</option>
        <option value="Transport">🚗 Transport</option>
        <option value="Bills">⚡ Bills & Utilities</option>
        <option value="Entertainment">🎬 Entertainment</option>
        <option value="Shopping">🛍️ Shopping</option>
      </select>
      <button className="btn-add" type="submit">Confirm Transaction</button>
    </form>
  );
}