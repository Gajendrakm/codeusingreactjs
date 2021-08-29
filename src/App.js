import Expenses from "./components/Expense/Expenses";

function App() {
    const expenses =[
        {id:'e1',title:'Toilet Paper',amount:94.12,date:new Date(2020,7,14)},
        
        {id:'e2',title:'Car Insurance',amount:95.12,date:new Date(2020,8,14)},

        {id:'e3',title:'New TV',amount:96.12,date:new Date(2020,9,14)},

        {id:'e4',title:'Desktop',amount:97.12,date:new Date(2020,10,14)},
    ];

    return (
        <div>
            <h2>Lets get started</h2>
            <Expenses items={expenses}/>
        </div>
    )

}

export default App;