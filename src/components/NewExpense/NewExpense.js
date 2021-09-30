import React from 'react';

import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        //console.log(expenseData) 
       //props.onAddExpense()
    }
    return (
    <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
    );
};

export default NewExpense;
/*{
    const [useInput, setUserInput] = useState({
        enteredTitle:'';
        enteredAmount:'',
        enteredDate:''
    });

    const titleChangeHandler = (event) => {
        setUserInput({
            enteredTitle: event.target.value,
        })
        or
        setUserInput({
            ...userInput,
            enteredTitle: event.target.value,
        })
        or
        setUserInput((prevState) => {
            return { ...prevState,enteredTitle: event.target.value}
        });
    }

}*/