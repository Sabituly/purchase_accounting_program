import './Costs.css'

import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import {useState} from "react";
import CostList from "./CostList";

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
                <CostList costs={filteredCosts}/>
            </Card>
        </div>
    )

}

export default Costs;