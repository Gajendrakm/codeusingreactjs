import React from 'react';

import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = () => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...eneteredExpenseData,
            id: Math.random().toString()
        };
        //console.log(expenseData) 
        props.onAddExpense()
    }
    return (
    <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
    );
};

export default NewExpense;