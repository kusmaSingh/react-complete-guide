import React, {useState} from 'react';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';
const Expenses = (props) => {
  const [filteredYear, seteFilterYear] = useState('2020');
  const filterCHangeHandler = selectedYear =>{
    seteFilterYear(selectedYear)
  }
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  
  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter ={filterCHangeHandler}></ExpenseFilter>
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList items={filteredExpenses}></ExpenseList>
    </Card>
  );
}

export default Expenses;