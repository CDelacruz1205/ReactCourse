import React, { useState } from "react";
import Card from "../../Card/Card";
import "../../Card/Card.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import ExpenseItem from "../ExpenseItem";
import ExpensesChart from "../ExpensesChart/ExpensesChart";
import ExpensesList from "../ExpensesList/ExpensesList";

export default function ExpenseItemsRender(props) {

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === props.filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses} />
    </Card>
  );

  // renderItems(props)
}
