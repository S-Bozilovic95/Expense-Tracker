import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = ({ filteredExpenses }) => {
  // jos jedan nacin uslovnog prikaza komponenti, ako se drasticno razlikuju
  // jsx sintakse onda je bolje koristiti ovaj nacin umesto ternarnog operatora
  if (filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {filteredExpenses.map((item) => {
        return (
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
            key={item.id}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
