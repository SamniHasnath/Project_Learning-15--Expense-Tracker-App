import { useState, useEffect } from "react";
import axios from "axios";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseChart from "./components/ExpenseChart";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/expenses");
      setExpenses(res.data);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  useEffect(() => { fetchExpenses(); }, []);

  // Functional Stats
  const total = expenses.reduce((sum, item) => sum + Number(item.amount), 0);
  const highest = expenses.length ? Math.max(...expenses.map(e => e.amount)) : 0;

  return (
    <div className="container">
      <div className="header-section">
        <h1>Wallet.io</h1>
        <p style={{color: '#94a3b8'}}>Smart Expense Tracking</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h4>Total Spent</h4>
          <p>${total.toLocaleString()}</p>
        </div>
        <div className="stat-card">
          <h4>Transactions</h4>
          <p>{expenses.length}</p>
        </div>
        <div className="stat-card">
          <h4>Highest Hit</h4>
          <p style={{color: '#f43f5e'}}>${highest.toLocaleString()}</p>
        </div>
      </div>

      <div className="main-grid">
        <div className="card">
          <h3 style={{color: '#fff', marginBottom: '20px'}}>Add Transaction</h3>
          <ExpenseForm refresh={fetchExpenses} />
          <hr style={{border: '0.5px solid var(--glass-border)', margin: '30px 0'}} />
          <ExpenseList expenses={expenses} refresh={fetchExpenses} />
        </div>

        <div className="card">
          <h3 style={{color: '#fff', marginBottom: '20px'}}>Spending Analytics</h3>
          <ExpenseChart expenses={expenses} />
        </div>
      </div>
    </div>
  );
}

export default App;