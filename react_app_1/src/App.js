import React, {useState} from "react";
import ExpenseFilter from "./Components/ExpenseItem/ExpenseFilter/ExpenseFilter";
import ExpenseItem from "./Components/ExpenseItem/ExpenseItem";
import ExpenseItemsRender from "./Components/ExpenseItem/ExpenseItemsRender/ExpenseItemsRender";
import NewExpense from "./Components/NewExpense/NewExpense";


function App() {
  const expenses = [
    { date: new Date(2021, 2, 28), title: "Car Insurance", amount: 2964.13 },
    { date: new Date(2021, 5, 12), title: "Credit Card", amount: 264.23 },
    { date: new Date(2021, 6, 21), title: "Cellphone Plan", amount: 964.2 },
  ];
  // const expenses = [
  //   {title: "Car Insurance", amount: 234.76, date: new Date(2021,5,19)},
  //   {title: "Clothes Shopping", amount: 265.14, date: new Date(2021,1,12)},
  //   {title: "Credit Card", amount: 8674.60, date: new Date(2021,12,25)},
  // ];
  const [filteredYear, setFilteredYear] = useState("2021");

  const addExpenseHandler = (expense) => {
    console.log("In app.js");
    console.log(expense);
  };

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <ExpenseFilter selected={filteredYear} onChangeFilterYear={filterChangeHandler}/>
      <ExpenseItemsRender items={expenses} />
    </div>
  );
}

export default App;
