import React from "react";
import "./ExpenseItem.css";
import ExpenseItemsRender from "./ExpenseItemsRender/ExpenseItemsRender";

const ExpenseItem = (props) => {
  const expenses = [
    { date: new Date(2021, 2, 28), title: "Car Insurance", amount: 2964.3 },
    { date: new Date(2021, 5, 12), title: "Credit Card", amount: 264.23 },
    { date: new Date(2021, 6, 21), title: "Cellphone Plan", amount: 964.2 },
  ];

  return (
    <div className="expenses">
      <ExpenseItemsRender items={expenses}/>
    </div>
  );
};

export default ExpenseItem;
