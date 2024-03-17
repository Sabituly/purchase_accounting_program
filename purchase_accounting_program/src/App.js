import React, {useState} from "react";
import Costs from "./companents/Costs/Costs";
import NewCost from "./companents/NewCost/NewCost";


const INITIAL_COSTS = [
    {
        id: 'c1',
        date: new Date(2020, 1, 25),
        description: "МакбукПро2024",
        amount: 999.99,
    },
    {
        id: 'c2',
        date: new Date(2021, 3, 23),
        description: "Iphone 13 ProMax",
        amount: 999.99,
    },
    {
        id: 'c3',
        date: new Date(2022, 1, 20),
        description: "Imac2020",
        amount: 1999.99,
    },
    {
        id: 'c4',
        date: new Date(2023, 2, 20),
        description: "keyboard",
        amount: 200.00,
    },
    {
        id: 'c5',
        date: new Date(2024, 2, 20),
        description: "soundcore liberty pro 3",
        amount: 200.00,
    }

];

function App() {

    const [costs, setCosts] = useState(INITIAL_COSTS);
    const addCostHandler = (cost) => {
        setCosts(prevState => {
            return [cost, ...prevState]
        });
    }
    return (
        <div>
            <NewCost onAddcost={addCostHandler}/>
            {/*<CostItem date={costs[0].date} description={costs[0].description} amount = {costs[0].amount}/>*/}
            <Costs costs={costs}/>
            {/* TODO В данном случаи costs это props  и одновременно это и имя переменной costs которую мы сами указали в Costs*/}
        </div>
    );
}

export default App;
