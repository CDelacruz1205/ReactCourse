import React, {useState} from "react";
import Card from "../../Card/Card";
import ExpenseDate from "../ExpenseDate/ExpenseDate";


export default function ExpenseItemsRender(props) {

  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Title changed");
  }

  const renderItems = (props) => {
    for (let i = 0; i < props.items.length; i++) {
      return (
        <Card className="expense-item">
          <ExpenseDate date={props.items[i].date} />
          <div className="expense-item__description">
            <h2>{ title }</h2>
            <div className="expense-item__price"> {"$" + props.items[i].amount} </div>
          </div>
          <button onClick= {clickHandler }>Change Title</button>
        </Card>
      );
    }
  };

  return renderItems(props);
}
