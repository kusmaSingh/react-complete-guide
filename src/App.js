import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
const DUMMY_EXPENSES =[
  {id:'e1' , title : 'Car insurance', amount: 799.49, date: new Date(2022,3,21)},
  {id:'e2', title : 'Mobile insurance', amount: 245.49, date: new Date(2019,4,1)},
  {id:'e3', title : 'New Desk (wooden)', amount: 199.49, date: new Date(2021,5,25)},
  {id:'e4', title : 'Motor bike', amount: 399.49, date: new Date(2022,2,2)},
  {id:'e5', title : 'Toilet paper' ,amount: 499.49, date: new Date(2021,6,20)},
  {id:'e6', title : 'New TV' ,amount: 499.49, date: new Date(2020,6,20)}

]

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    console.log("App.js expense" +expense );
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;