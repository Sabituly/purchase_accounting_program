import './Costs.css'
import CostItem from "./CostItem";
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import {useState} from "react";

const Costs = (props) => {

    const [selectedYear, setSelectedYear] = useState('2022');
    const getDataFromChild = (data) => {
        setSelectedYear(data);
    }

    const filteredCosts = props.costs.filter(cost => {

        return cost.date.getFullYear().toString() === selectedYear;
    })

    let costsContent = <p>В этом Году Расходов Нет</p>;

    if (filteredCosts.length > 0) {
        costsContent = filteredCosts.map((cost) => (
            <CostItem
                key={cost.id}
                date={cost.date}
                description={cost.description}
                amount={cost.amount}
            />
        ))
    }

    return (
        <div>

            <Card className={'costs'}>
                <CostsFilter year={selectedYear} onChangeYear={getDataFromChild}/>
                {costsContent}
            </Card>
        </div>
    )

}

export default Costs;