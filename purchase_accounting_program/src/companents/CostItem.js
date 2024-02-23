import './CostItem.css';
function CostItem() {

    const costDate = new Date(2024, 2, 23);
    const costDescription = 'МакбукПро2024';
    const costAmount = 999.99;

  return (
    <div className='cost-item'>
      <div>Март 2021 12</div>
      <div className='cost-item__description'>
        <h2>{costDescription}</h2>
        <div className='cost-item__price'>{costAmount}</div>
      </div>
    </div>
  );
}

export default CostItem;
