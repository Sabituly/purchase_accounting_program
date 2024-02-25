import CostItem from "./companents/CostItem";

function App() {

  const costs = [
      {
          date: new Date(2024, 1, 25),
          description: 'МакбукПро2024',
          amount: 999.99
      },
      {
          date: new Date(2024, 2, 23),
          description: 'Iphone 15 ProMax',
          amount: 999.99
      },
      {
          date: new Date(2024, 2, 20),
          description: 'Imac2020',
          amount: 1999.99
      }

  ]

  return (
    <div>
      <h1>Начнём изучение Реакт!!!</h1>
      <CostItem date={costs[0].date} description={costs[0].description} amount = {costs[0].amount}/>
      <CostItem date={costs[1].date} description={costs[1].description} amount = {costs[1].amount}/>
      <CostItem date={costs[2].date} description={costs[2].description} amount = {costs[2].amount}/>
    </div>
  );
}

export default App;
