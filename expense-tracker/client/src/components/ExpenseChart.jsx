// client/src/components/ExpenseChart.jsx
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ExpenseChart({ expenses }) {
  // 1. Extract unique categories (e.g., ["Food", "Rent"])
  const categories = [...new Set(expenses.map((e) => e.category))];

  // 2. Sum up amounts for each category
  const categoryTotals = categories.map((cat) => {
    return expenses
      .filter((e) => e.category === cat)
      .reduce((sum, e) => sum + Number(e.amount), 0);
  });

 const data = {
    labels: categories,
    datasets: [
      {
        label: "Total Spent ($)",
        data: categoryTotals,
        backgroundColor: [
          "rgba(99, 102, 241, 0.8)",  // Indigo
          "rgba(168, 85, 247, 0.8)",  // Purple
          "rgba(244, 63, 94, 0.8)",   // Rose
          "rgba(16, 185, 129, 0.8)",  // Emerald
          "rgba(59, 130, 246, 0.8)",  // Blue
          "rgba(245, 158, 11, 0.8)",  // Amber
        ],
        hoverBackgroundColor: [
          "#6366f1",
          "#a855f7",
          "#f43f5e",
          "#10b981",
          "#3b82f6",
          "#f59e0b",
        ],
        borderWidth: 2,
        borderColor: "#1e293b", // Matches your card background
      },
    ],
  };

  const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        color: "#f8fafc", // White text for legend
        font: { size: 12 }
      }
    },
  },
};

  return (
    <div style={{ padding: "20px" }}>
      <h3>Distribution</h3>
      {expenses.length > 0 ? (
        <Pie data={data} options={options} />
      ) : (
        <p style={{ color: "#888" }}>Add an expense to see the chart!</p>
      )}
    </div>
  );
}