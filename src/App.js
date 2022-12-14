import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/New Expenses/NewExpense";


function App() {
  const DUMMY_DATA = [
    {
      id : "e1",
      title : "Shampoo",
      amount : "266",
      date : new Date(2022, 2, 2)
    },
    {
      id : "e2",
      title : "Soap",
      amount : "209",
      date : new Date(2022, 2, 2)
    }
  ]
  const [expenses,setExpenses] =useState(DUMMY_DATA)

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }

  return (
    <div>
      
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
      
    </div>
  );
}

export default App;
