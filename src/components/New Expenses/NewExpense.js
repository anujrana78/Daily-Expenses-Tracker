import React, { useState } from 'react'
import ExpensesForm from './ExpensesForm'
import './newExpense.css'

const NewExpense = (props) => {

  const [isEditing,setisEditing] = useState(true)
  

    const saveExpenseDataHandler= (enteredExpenesData) => {
        const expenseData = {
            ...enteredExpenesData,
            id:Math.random().toString()
        }
        
        props.onAddExpense(expenseData)
    }   

    const toggleEditing = () => {
      setisEditing(!isEditing)
       console.log(isEditing)
    }
  
  return (
    <div className='new-expense'>
      {isEditing && <button onClick={toggleEditing}>Add New Expense</button>}
      {!isEditing && <ExpensesForm onSaveExpenseData={saveExpenseDataHandler} stopEditing={toggleEditing}/>}
    </div>
  )
}

export default NewExpense
