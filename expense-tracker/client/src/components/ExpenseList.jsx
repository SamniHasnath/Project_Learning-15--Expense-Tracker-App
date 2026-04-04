import axios from "axios";

export default function ExpenseList({ expenses, refresh }) {
  const deleteExpense = async (id) => {
    await axios.delete(`http://localhost:5000/api/expenses/${id}`);
    refresh();
  };

  return (
    <ul className="list">
      {expenses.map((exp) => (
        <li key={exp.id}>
          <span>{exp.title} - ${exp.amount} ({exp.category})</span>
          <button onClick={() => deleteExpense(exp.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}