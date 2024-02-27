import CostForm from "./CostForm";
import "./NewCost.css";
const NewCost = (propsNewCost) => {

    const saveCostDataHandler = (inputCostData) => {

        const costData = {
            ...inputCostData,
            id: Math.random().toString()
        }
        console.log(costData);

        propsNewCost.onAddcost(costData);
    }



  return (
      <div className={"new-cost"}>
        <CostForm onSaveCostData ={saveCostDataHandler}/>
      </div>
  );
};

export default NewCost;
