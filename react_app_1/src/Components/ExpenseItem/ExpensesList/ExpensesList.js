import React from "react";
import ExpenseItem from "../ExpenseItem";
import "./ExpensesList.css";

export default function ExpensesList(props) {
//   let expensesContent = <p>No expenses found</p>;
  
    if(props.items.length < 1) {
        return <h2 className="expenses-list__fallback"> No expenses found </h2>
    }

  return (
    <ul className="expenses-list">
      {props.items.map((element) => (
        <ExpenseItem
          key={Math.random()}
          title={element.title}
          amount={element.amount}
          date={element.date}
        />
      ))}
    </ul>
  );
}
