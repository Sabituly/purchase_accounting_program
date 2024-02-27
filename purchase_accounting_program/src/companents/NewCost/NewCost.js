import CostForm from "./CostForm";
import "./NewCost.css";
const NewCost = () => {

    const saveCostDataHandler = (inputCostData) => {

        console.log(inputCostData)
    }
  return (
      <div className={"new-cost"}>
        <CostForm onSaveCostData ={saveCostDataHandler}/>
      </div>
  );
};

export default NewCost;
