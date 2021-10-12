import ExpenseItem from "./Components/ExpenseItem/ExpenseItem";

function App() {

  // const expenses = [
  //   {title: "Car Insurance", amount: 234.76, date: new Date(2021,5,19)},
  //   {title: "Clothes Shopping", amount: 265.14, date: new Date(2021,1,12)},
  //   {title: "Credit Card", amount: 8674.60, date: new Date(2021,12,25)},
  // ];

  return (
    <div className="App">
      <ExpenseItem title="Hola" amount={3023.423} date={new Date(2021,5,19)}/>
    </div>
  );
}

export default App;
