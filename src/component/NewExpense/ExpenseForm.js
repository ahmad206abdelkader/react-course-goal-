import "./ExpenseForm.css";
import React, { useState } from "react";



const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTilte] = useState('');
    const [enteredAmount, setEnteredAmount] =useState('');
    const [enteredDate, setEnteredADate] =useState('');
//   const [userInput, setUserInput] = useState({
//     enterdTitle: "",
//     enterdAmount: "",
//     enterdDate: "",
//   });

  const titleChangeHandler = (event) => {
    setEnteredTilte(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enterdTitle: event.target.value
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enterdTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enterdAmount: event.target.value
    // });
    // setUserInput((prevState) => {
    //     return { ...prevState, enterdAmount: event.target.value };
    //   });
  };

  const dateChangeHandeler = (event) => {
       setEnteredADate(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enterdDate: event.target.value
    // });
    // setUserInput((prevState) => {
    //     return { ...prevState, enterdDate: event.target.value };
    //   });
  };


  const submitHandler = (event) => {
    event.preventDefult();
    
    const expenseDate = {

        tilte: enteredTitle,
        amount: enteredAmount,
        Date: new Date(enteredDate)
    };

    props.onSaveExpenseData(expenseDate);
    setEnteredTilte('');
    setEnteredAmount('');
    setEnteredADate('');

  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <lable>Title</lable>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <lable>amount</lable>
          <input
          value={enteredAmount}
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <lable>Date</lable>
          <input
          value={enteredDate}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandeler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" >Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
