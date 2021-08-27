
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
function App() {

  const expensees =[
    {id:'e1' , title : 'Car insurance', amount: 799.49, date: new Date(2021,3,21)},
    {id:'e2', title : 'Mobile insurance', amount: 245.49, date: new Date(2021,4,1)},
    {id:'e3', title : 'New Desk (wooden)', amount: 199.49, date: new Date(2021,5,25)},
    {id:'e4', title : 'Motor bike', amount: 399.49, date: new Date(2021,2,2)},
    {id:'e5', title : 'Toilet paper' ,amount: 499.49, date: new Date(2021,6,20)},
    {id:'e6', title : 'New TV' ,amount: 499.49, date: new Date(2021,6,20)}

  ]
const addExpenseHandler = (expense)=>{
  console.log('In App.js');
  expensees.push(expense);
  console.log(expensees);

}

  return (
    <div className="App">
      <h2>Let's get started!!</h2>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items={expensees}></Expenses>
    </div>
  );
}

export default App;
