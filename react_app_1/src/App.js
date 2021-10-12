import React, {useState} from "react";
import ExpenseFilter from "./Components/ExpenseItem/ExpenseFilter/ExpenseFilter";
import ExpenseItem from "./Components/ExpenseItem/ExpenseItem";
import ExpenseItemsRender from "./Components/ExpenseItem/ExpenseItemsRender/ExpenseItemsRender";
import ExpensesChart from "./Components/ExpenseItem/ExpensesChart/ExpensesChart";
import NewExpense from "./Components/NewExpense/NewExpense";

const DUMMY_DATA = [
  { date: new Date(2021, 2, 28), title: "Car Insurance", amount: 2964.13 },
  { date: new Date(2021, 5, 12), title: "Credit Card", amount: 264.23 },
  { date: new Date(2021, 6, 21), title: "Cellphone Plan", amount: 64.2 },
]

function App() {
 
  const [expenses, setExpenses] = useState(DUMMY_DATA);
  const [filteredYear, setFilteredYear] = useState("2021");

  const addExpenseHandler = (expense) => {
    
    setExpenses(prevExpense => {
      return [expense, ...prevExpense]
    })

  };

    const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <ExpenseFilter selected={filteredYear} onChangeFilterYear={filterChangeHandler}/>
      {/* <ExpensesChart expenses={expenses}/> */}
      <ExpenseItemsRender items={expenses} filteredYear={filteredYear}/>
    </div>
  );
}

export default App;
