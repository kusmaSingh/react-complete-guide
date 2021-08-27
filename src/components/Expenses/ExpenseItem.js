
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import React, {useState} from 'react';
function ExpenseItem(props) {
  debugger
 const [title, setTitle] = useState(props.title);
console.log(props);
 function changeTitle(e){
  console.log(title)
  setTitle("title")
 }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button className="expense-button" onClick={changeTitle}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;