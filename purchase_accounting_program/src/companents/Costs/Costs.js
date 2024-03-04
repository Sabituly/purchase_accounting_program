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

    return (
        <div>

            <Card className={'costs'}>
                <CostsFilter year={selectedYear} onChangeYear={getDataFromChild}/>
                {props.costs.map((cost) => (
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