import ExpenseItem from "./components/ExpenseItem";

function App() {
    const expenses =[
        {id:'e1',title:'Toilet Paper',amount:94.12,date:new Date(2020,7,14)},
        
        {id:'e2',title:'face wipe',amount:95.12,date:new Date(2020,8,14)},

        {id:'e3',title:'soft tissue',amount:96.12,date:new Date(2020,9,14)},

        {id:'e4',title:'hand tissue',amount:97.12,date:new Date(2020,10,14)},
    ];
    return (
        <div>
            <h2>Let's get started!</h2>
            <ExpenseItem 
                title={expenses[0].title}
                amount={expenses[0].amount}
                date={expenses[0].date}>
            </ExpenseItem>
            <ExpenseItem
                title={expenses[1].title}
                amount={expenses[1].amount}
                date={expenses[1].date}>
            </ExpenseItem>
            <ExpenseItem
                title={expenses[2].title}
                amount={expenses[2].amount}
                date={expenses[2].date}>
            </ExpenseItem>
        </div>
    );
}

export default App;