import React from "react"
import './ExpenseList.css';
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props)=>{
if(props.items.length === 0){
return <h1 className='expense-list__fallback'>No Expens Found</h1>
}

    return (
      <ul className="expenses-list">
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            key={expense.id}
          />
        ))}
      </ul>
    );

}
export default ExpenseList