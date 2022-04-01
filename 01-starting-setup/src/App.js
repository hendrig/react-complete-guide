import Expenses from "./components/Expenses";
// import ExpenseItem from './components/ExpenseItem'

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 294.67, date: new Date(1990, 3, 7) },
    { title: "Bus Insurance", amount: 394.62, date: new Date(1990, 4, 7) },
    { title: "Another Insurance", amount: 2.67, date: new Date(2020, 8, 7) },
    { title: "Newer Insurance", amount: 94.67, date: new Date(2021, 11, 7) },
    { title: "Older", amount: 24.67, date: new Date(1988, 0, 7) },
  ];

  return (
    <div>
      <h2>Let's get started!!</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
