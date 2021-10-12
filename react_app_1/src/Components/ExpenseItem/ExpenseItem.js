import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseItemsRender from "./ExpenseItemsRender/ExpenseItemsRender";
import Card from "../Card/Card";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import "./ExpenseFilter/ExpenseFilter.css";
import ExpenseDate from "./ExpenseDate/ExpenseDate";

const ExpenseItem = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Title changed");
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price"> {"$" + props.amount} </div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
