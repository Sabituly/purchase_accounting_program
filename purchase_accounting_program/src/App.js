import CostItem from "./companents/Costs/CostItem";
import Costs from "./companents/Costs/Costs";
import NewCost from "./companents/NewCost/NewCost";
function App() {
  const costs = [
    {
      date: new Date(2024, 1, 25),
      description: "МакбукПро2024",
      amount: 999.99,
    },
    {
      date: new Date(2024, 2, 23),
      description: "Iphone 15 ProMax",
      amount: 999.99,
    },
    {
      date: new Date(2024, 2, 20),
      description: "Imac2020",
      amount: 1999.99,
    },
  ];

  return (
    <div>
      <NewCost>Начнём изучение Реакт!!!</NewCost>
      {/*<CostItem date={costs[0].date} description={costs[0].description} amount = {costs[0].amount}/>*/}
      <Costs costs={costs} />
      {/* TODO В данном случаи costs это props  и одновременно это и имя переменной costs которую мы сами указали в Costs*/}
    </div>
  );
}

export default App;
