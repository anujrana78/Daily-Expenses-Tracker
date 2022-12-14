import React from "react";
import ExpenseItem from "./ExpenseItem";
import './expensesList.css'

const ExpensesList = (props) => {
    let expensesContent = <p>No Expenses are found</p>;

    if (props.filteredExpenses.length === 0) {
        return <h2 className="expenses-list__fallback"> No Expenses Found</h2>
    }

    
    return <ul className="expenses-list">
        {
            props.filteredExpenses.map((expense) => (
                <ExpenseItem
                  date={expense.date}
                  title={expense.title}
                  amount={expense.amount}
                  key={expense.id}
                />
        
              ))
        }
    </ul>
}


export default ExpensesList