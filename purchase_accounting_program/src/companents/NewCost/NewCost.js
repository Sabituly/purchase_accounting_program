import CostForm from "./CostForm";
import "./NewCost.css";
import {useState} from "react";
const NewCost = (propsNewCost) => {


    const [isFormVisible, setIsFormVisible] = useState(false); //создаем состояние для отображения компаненты
    const saveCostDataHandler = (inputCostData) => { //принимаю входные вводные данные

        const costData = {
            ...inputCostData,
            id: Math.random().toString()
        }
        console.log(costData);

        propsNewCost.onAddcost(costData); // передаю на вверх данные в апп
        setIsFormVisible(false); // так как тут тоже идет вызов при нажатии кнопки на добавить мне надо поменять на false
    }

  const inputCostDataHandler = () => {
        setIsFormVisible(true);
  }

  const cancelCostHandler = () => {
        setIsFormVisible(false)
  }

  return (
      <div className={"new-cost"}>
          {!isFormVisible && <button onClick={inputCostDataHandler}>Добавить Новый Расход</button> }  {/* если не false то показывай кнопку*/}
          {isFormVisible &&  <CostForm onSaveCostData ={saveCostDataHandler} onCancel={cancelCostHandler}/> }
      </div>
  );
};

export default NewCost;
