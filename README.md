# 💰 Wallet.io | Modern PERN Expense Tracker

**Wallet.io** is a modern full-stack expense tracking dashboard built using the **PERN Stack (PostgreSQL, Express, React, Node.js)**. It helps users track daily expenses and visualize spending patterns with interactive charts.

---

## ✨ Features

* 📊 **Real-time Analytics** – Visualize spending using a dynamic Pie Chart (Chart.js)
* 🔄 **Live Updates** – Instantly updates UI when new expenses are added
* 📈 **Smart Insights** – Shows total spending and category distribution
* 🧾 **Expense Management** – Add, view, and delete transactions
* 📱 **Responsive Design** – Works on desktop, tablet, and mobile

---
<img width="433" height="443" alt="image" src="https://github.com/user-attachments/assets/c232122b-e535-4c61-8640-a2ecfc138e00" />



## 🛠️ Tech Stack

| Layer       | Technology                      |
| ----------- | ------------------------------- |
| Frontend    | React.js, Vite, Chart.js, Axios |
| Backend     | Node.js, Express.js             |
| Database    | PostgreSQL                      |
| Environment | Dotenv, Cors, pg                |

---

## 🚀 Getting Started

### 1. Prerequisites

Make sure you have installed:

* Node.js (v16 or above)
* PostgreSQL (running locally)

---

## 🗄️ 2. Database Setup

Open PostgreSQL (psql) and run:

```sql
CREATE DATABASE expense_tracker;

\c expense_tracker;

CREATE TABLE expenses (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  amount NUMERIC NOT NULL,
  category VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## ⚙️ 3. Backend Setup

```bash
cd server
```

Create a `.env` file:

```env
PORT=5000
DB_USER=postgres
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=expense_tracker
```

Install and run:

```bash
npm install
npm run dev
```

---

## 🎨 4. Frontend Setup

```bash
cd client
```

Install and run:

```bash
npm install
npm run dev
```

---

## 🌐 5. Run the App

* Backend → [http://localhost:5000](http://localhost:5000)
* Frontend → [http://localhost:5173](http://localhost:5173) *(or 5174 if port changes)*

---

## 📂 Project Structure

```text
expense-tracker/
│
├── server/
│   ├── routes/
│   ├── db.js
│   └── server.js
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── App.css
│   └── index.html
```

---

## 🛰️ API Endpoints

| Method | Endpoint      | Description       |
| ------ | ------------- | ----------------- |
| GET    | /expenses     | Get all expenses  |
| POST   | /expenses     | Add new expense   |
| DELETE | /expenses/:id | Delete an expense |

---

## 📜 License

This project is licensed under the MIT License.

---

## ❤️ Author

**Built by Samni Hasnath**

---

# 🎯 One-line Summary

*A simple full-stack app to track expenses and visualize spending using charts.*

---
