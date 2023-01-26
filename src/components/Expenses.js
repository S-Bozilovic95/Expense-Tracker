import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses({ expenses }) {
  return (
    <Card className="expenses">
      {expenses.map((el, index) => {
        return (
          <ExpenseItem
            title={el.title}
            amount={el.amount}
            date={el.date}
            key={index}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;
