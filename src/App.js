import Expenses from "./components/Expense/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

function App() {
    const expenses =[
        {id:'e1',title:'Toilet Paper',amount:94.12,date:new Date(2020,7,14)},
        
        {id:'e2',title:'Car Insurance',amount:95.12,date:new Date(2020,8,14)},

        {id:'e3',title:'New TV',amount:96.12,date:new Date(2020,9,14)},

        {id:'e4',title:'Desktop',amount:97.12,date:new Date(2020,10,14)},
    ];

    const addExpenseHandler = expense => {
        console.log('In App.js');
        console.log(expense);
    }

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items={expenses}/>
        </div>
    )

}

export default App;