import './Costs.css'

import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import {useState} from "react";
import CostList from "./CostList";
import CostsDiagram from "./CostsDiagram";

const Costs = (props) => {

    const [selectedYear, setSelectedYear] = useState('2020');
    const getDataFromChild = (data) => {
        setSelectedYear(data);
    }

    const filteredCosts = props.costs.filter((cost) => {

        return cost.date.getFullYear().toString() === selectedYear;
    })

    return (
        <div>

            <Card className={'costs'}>
                <CostsFilter year={selectedYear} onChangeYear={getDataFromChild}/>
                <CostsDiagram costs={filteredCosts}/>
                <CostList costs={filteredCosts}/>
            </Card>
        </div>
    )

}

export default Costs;