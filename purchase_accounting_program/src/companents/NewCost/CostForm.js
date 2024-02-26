import "./CostForm.css";
import { useState } from "react";
const CostForm = () => {
  // const [name, setName] = useState('');
  // const [amount, setAmount] = useState('');
  // const [date, setDate] = useState('');

  const [userInput, setUserInput] = useState({
    name: "",
    amount: "",
    date: "",
  });
  const nameChangeHandler = (event) => {
    // setName(event.target.value);
    // setUserInput({
    //     ...userInput, //сначала извлекаем всё потом меняем конкретное значение
    //     name: event.target.value
    // })

    setUserInput((previousState) => {
      return { ...previousState, name: event.target.value };
    });
  };
  const amountChangeHandler = (event) => {
    // setUserInput({
    //     ...userInput, //сначала извлекаем всё потом меняем конкретное значение
    //     amount: event.target.value
    // })

      setUserInput((previousState) => {
          return { ...previousState,
            amount: event.target.value };
      })
  };

  const dateChangeHandler = (e) => {
    // setUserInput({
    //   ...userInput, //сначала извлекаем всё потом меняем конкретное значение
    //   date: event.target.value,
    // });

      setUserInput((previousState) => {
          return { ...previousState,
            date: e.target.value};
      })
  };

  const submitHandler = (e) => {
    e.preventDefault(); // всттроенный в js метод

    const costData = {
       name: userInput.name,
       amount: userInput.amount,
       date: new Date(userInput.date)
    };

      console.log(costData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Название</label>
          <input type={"text"} onChange={nameChangeHandler} />
        </div>
        <div className="new-cost__control">
          <label>Сумма</label>
          <input
            type={"number"}
            min={"0.01"}
            step={"0.01"}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-cost__control">
          <label>Дата</label>
          <input
            type={"date"}
            min={"2024-01-01"}
            step={"2027-12-31"}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-cost__actions">
          <button type={"submit"}>Добавить расход</button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;
