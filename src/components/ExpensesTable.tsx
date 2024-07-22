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
  const [error, setError] = useState<string>();

  useEffect(() => {
    //TODO: Add loading spinner while data is being fetched

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
        setError("Unable to load expenses. Please try again later.");
        console.error("Error fetching expenses: ", error);
      });
  }, []);

  //TODO: Add functionality to sort columns
  /* 
  1. Add an onclick onto each table heading to make it clickable
  2. Capture useState of which column has been sorted and whether it is asc or desc
  3. Display arrow icon on the sorted column with its orientation dependent on whether its asc or desc
  4. Create a function to sort the json data returned by API
  
  */

  return (
    <div>
      {error ? (
        <div>{error}</div>
      ) : (
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
      )}
    </div>
  );
};

export default ExpensesTable;
