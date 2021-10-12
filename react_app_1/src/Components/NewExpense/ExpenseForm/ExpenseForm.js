import React, {useState} from "react";
import './ExpenseForm.css';

const Expenseform = (props) => {

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");


    const titleChangeHandler = (e) => {
        setTitle(e.target.value);
    }
    
    const amountChangeHandler = (e) => {
        setAmount(e.target.value);
    }
    
    const dateChangeHandler = (e) => {
        setDate(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title: title,
            amount:amount,
            date: new Date(date)
        }

        props.onSaveExpenseData(expenseData);

        setAmount("");
        setDate("");
        setTitle("");
    }

  return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label> Title </label>
            <input type="text" value={title} onChange={titleChangeHandler}/>
          </div>
          <div className="new-expense__control">
            <label> Amount </label>
            <input type="number" value={amount} onChange={amountChangeHandler} min="0.01" step="0.01" />
          </div>
          <div className="new-expense__control">
            <label> Date </label>
            <input type="date" value={date} onChange={dateChangeHandler} min="2021-01-01" />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
  );
};

export default Expenseform;
