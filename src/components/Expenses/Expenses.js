import React, {useState} from 'react';
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  const [filterYear, seteFilterYear] = useState('2020');
  const filterCHangeHandler = selectedYear =>{
    seteFilterYear(selectedYear)
  }
  
  return (
    <Card className="expenses">
      <ExpenseFilter selected={filterYear} onChangeFilter ={filterCHangeHandler}></ExpenseFilter>
     {props.items.map((expense) => (
       <ExpenseItem
       title={expense.title}
       amount={expense.amount}
       date={expense.date}
       key={expense.id}
     />
     ))}
      
    </Card>
  );
}

export default Expenses;