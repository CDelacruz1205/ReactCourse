import React from "react";
import Card from "../../Card/Card";
import ExpenseDate from "../ExpenseDate/ExpenseDate";


export default function ExpenseItemsRender(props) {
  const itemsLength = props.items.length;

  const renderItems = (props) => {
    for (let i = 0; i < itemsLength; i++) {
      return (
        <Card className="expense-item">
          <ExpenseDate date={props.items[i].date} />
          <div className="expense-item__description">
            <h2>{props.items[i].title}</h2>
            <div className="expense-item__price"> {"$" + props.items[i].amount} </div>
          </div>
        </Card>
      );
    }
  };

  return renderItems(props);
}
