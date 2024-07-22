import { useEffect, useState } from "react";

type Expense = {
  id: number;
  merchant: string;
  amount: number;
  description: string;
  date: string;
  category: string;
  status: string;
};

const ExpensesTable = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    fetch("https://expenses-backend-mu.vercel.app/expenses", {
      headers: {
        "Content-Type": "application/json",
        Username: "rahul.matharu",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setExpenses(data);
      })
      .catch((error) => {
        console.error("Error fetching expenses: ", error);
      });
  }, []);

  return <div>Expenses</div>;
};

export default ExpensesTable;
