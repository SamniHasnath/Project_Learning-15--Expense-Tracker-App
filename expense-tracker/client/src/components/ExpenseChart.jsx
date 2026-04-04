import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ExpenseChart({ expenses }) {
  const categories = [...new Set(expenses.map((e) => e.category))];
  const data = {
    labels: categories,
    datasets: [
      {
        label: "Expenses by Category",
        data: categories.map((cat) => 
          expenses.filter((e) => e.category === cat).reduce((sum, e) => sum + Number(e.amount), 0)
        ),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  return (
    <div style={{ width: "300px", margin: "auto" }}>
      <h3>Spendings</h3>
      {expenses.length > 0 ? <Pie data={data} /> : <p>No data yet</p>}
    </div>
  );
}