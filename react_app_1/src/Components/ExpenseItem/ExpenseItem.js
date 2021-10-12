import React, {useState} from "react";
import "./ExpenseItem.css";
import ExpenseItemsRender from "./ExpenseItemsRender/ExpenseItemsRender";
import Card from "../Card/Card";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import './ExpenseFilter/ExpenseFilter.css'
const ExpenseItem = (props) => {

  const [filteredYear, setFilteredYear] = useState("2021");

  const expenses = [
    { date: new Date(2021, 2, 28), title: "Car Insurance", amount: 2964.13 },
    { date: new Date(2021, 5, 12), title: "Credit Card", amount: 264.23 },
    { date: new Date(2021, 6, 21), title: "Cellphone Plan", amount: 964.2 },
  ];

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilterYear={filterChangeHandler}/>
      <ExpenseItemsRender items={expenses}/>
    </Card>
  );
};

export default ExpenseItem;
