import { useState } from 'react';
import ProjectWrapper from '../../components/ProjectWrapper';

function ProfitOrLoss() {
  const [stockData, setStockData] = useState({
    price: '',
    qty: '',
    date: '',
  });

  const { price, qty, date } = stockData;

  const onChange = (e) =>
    setStockData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <ProjectWrapper
      title='Profit or loss on your stock?'
      projectLink='https://github.com/neogcamp/build/blob/main/basics/profit-or-loss.md'
    >
      <main className='two-grid'>
        <form onSubmit={onSubmit}>
          <div className='form-control'>
            <label htmlFor='price'>Stock Price</label>
            <input
              type='number'
              min='1'
              name='price'
              value={price}
              onChange={onChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='qty'>Quantity</label>
            <input
              type='number'
              min='1'
              name='qty'
              value={qty}
              onChange={onChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='date'>Date purchased</label>
            <input
              type='date'
              min='1'
              name='date'
              value={date}
              onChange={onChange}
            />
          </div>
        </form>
        <section className='result'></section>
      </main>
    </ProjectWrapper>
  );
}

export default ProfitOrLoss;
