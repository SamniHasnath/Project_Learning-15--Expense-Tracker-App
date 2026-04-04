import { useState } from "react";
import axios from "axios";

export default function ExpenseForm({ refresh }) {
  const [form, setForm] = useState({ title: "", amount: "", category: "Food" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/expenses", form);
    setForm({ title: "", amount: "", category: "Food" });
    refresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={form.title} 
        onChange={(e) => setForm({...form, title: e.target.value})} required />
      <input type="number" placeholder="Amount" value={form.amount} 
        onChange={(e) => setForm({...form, amount: e.target.value})} required />
      <select value={form.category} onChange={(e) => setForm({...form, category: e.target.value})}>
        <option value="Food">Food</option>
        <option value="Rent">Rent</option>
        <option value="Travel">Travel</option>
        <option value="Other">Other</option>
      </select>
      <button type="submit">Add Expense</button>
    </form>
  );
}