import { useEffect, useState } from "react";
import { capitaliseFirstLetter, formatDate } from "../utils";

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

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Merchant</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense: Expense) => (
            <tr key={expense.id}>
              <td>{formatDate(expense.date)}</td>
              <td>{expense.merchant}</td>
              <td>£{expense.amount}</td>
              <td>{capitaliseFirstLetter(expense.category)}</td>
              <td>{expense.description}</td>
              <td>{capitaliseFirstLetter(expense.status)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpensesTable;
