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

    return (
        <div>

            <Card className={'costs'}>
                <CostsFilter year={selectedYear} onChangeYear={getDataFromChild}/>
                {filteredCosts.map((cost) => (
                    <CostItem
                        key = {cost.id}
                        date={cost.date}
                        description={cost.description}
                        amount={cost.amount}
                    />
                ))}
            </Card>
        </div>
    )

}

export default Costs;