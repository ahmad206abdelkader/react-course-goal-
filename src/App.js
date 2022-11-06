import React from "react";
import Expense from "./component/Expenses/Expense";
import NewExpense from "./component/NewExpense/NewExpense";

// import logo from "./logo.svg";
import "./App.css";
// import ExpenseItem from "./component/ExpenseItem";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "let started"),
  //   React.createElement(Expense, { items: expenses })
  // );


  const addExpenseHandler = expense => {

    console.log('In App.js');
    console.log(expense);

  };



return(
  <div className="App">
    <NewExpense onAddExpense={addExpenseHandler}/>
    <Expense items={expenses} />
  </div>);
}

export default App;
