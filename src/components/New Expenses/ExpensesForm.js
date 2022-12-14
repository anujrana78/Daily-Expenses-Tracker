import React, { useState } from "react";
import "./expensesForm.css";

const ExpensesForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };
  

    props.onSaveExpenseData(expenseData);
    setAmount('');
    setTitle('');
    setDate('');
    props.stopEditing(false)
  };

  return (
    <form onSubmit={submitHandler}>
    <div className="new-expense__controls">
      
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0"
            step="10"
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-12-01"
            max="2023-01-01"
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
        <div className="new-expense__actions">
          <button onClick={props.stopEditing}>Cancel</button>
        </div>
     
    </div> 
    </form>
  );
};

export default ExpensesForm;
