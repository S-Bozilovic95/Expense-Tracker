import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = ({ expenses }) => {
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
};

export default Expenses;
