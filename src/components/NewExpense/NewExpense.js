import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    onAddExpense(expenseData);
  };

  const showFormHandler = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="new-expense">
      {showForm ? (
        <button onClick={showFormHandler}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          showFormHandler={showFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
