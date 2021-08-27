import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [iSNewExpense , setNewState] =  useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  const isAddNewExpenseHandler = () =>{
      setNewState(true)
  }
  const onCancelButtonHandler =()=>{
    setNewState(false)
  }
  return (
    <div className='new-expense'>
        {iSNewExpense ?  <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}  onCancelButton ={onCancelButtonHandler}/> : <button onClick={isAddNewExpenseHandler}>Add New Expense</button>}
      
    </div>
  );
};

export default NewExpense;