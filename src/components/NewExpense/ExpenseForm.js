import React, {useState} from "react";
import './ExpenseForm.css'

const ExpenseForm = (props)=>{

    const [userInput, setUserInput ]= useState({
        enteredTitled: '',
        enteredAmount:'',
        enteredDate:''
    });

    const titleChanheHandler = (event)=>{
        setUserInput((prevState) =>{
            return  {...prevState, enteredTitled:event.target.value}
        });
        
    };

    const AmountChanheHandler = (event)=>{
        setUserInput({ ...userInput, enteredAmount: event.target.value});
    }
    const DateChanheHandler = (event)=>{
        setUserInput( {...userInput, enteredDate: event.target.value});
    }
    const formSubmitHandleer = (event)=>{
      event.preventDefault();
      const expenseData= {
        titled:userInput.enteredTitled,
        amount:userInput.enteredAmount,
        date:userInput.expenseData
      }
      props.onSaveExpenseData()
      console.log(expenseData);
      setUserInput({
        enteredTitled: '',
        enteredAmount:'',
        enteredDate:''
    })
      
    }
    return (
      <form onSubmit={formSubmitHandleer}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={userInput.enteredTitled}
              onChange={titleChanheHandler}
            ></input>
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              value={userInput.enteredAmount}
              onChange={AmountChanheHandler}
            ></input>
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31 "
              value={userInput.enteredDate}
              onChange={DateChanheHandler}
            ></input>
          </div>
        </div>
        <div className="new-expense__controls">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );

}
export default ExpenseForm;