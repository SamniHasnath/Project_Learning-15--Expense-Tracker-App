import { useState, useEffect } from "react";
import axios from "axios";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseChart from "./components/ExpenseChart";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await axios.get("http://localhost:5000/expenses");
    setExpenses(res.data);
  };

  useEffect(() => {
  const loadData = async () => {
    const res = await axios.get("http://localhost:5000/expenses");
    setExpenses(res.data);
  };

  loadData();
}, []);
  return (
    <div className="container">
      <h1>💰 Expense Tracker</h1>

      <ExpenseForm refresh={fetchExpenses} />
      <ExpenseChart expenses={expenses} />
      <ExpenseList expenses={expenses} refresh={fetchExpenses} />
    </div>
  );
}

export default App;