import { useState } from 'react';
import ProjectWrapper from '../../components/ProjectWrapper';
import './CashRegister.css';

const countCash = (amount) => {
  const cashStep = [1, 5, 10, 20, 100, 500, 2000].reverse();
  let restAmount = amount;
  const cashCount = {};
  cashStep.forEach((step) => {
    let ratio = restAmount / step;
    if (ratio >= 1) {
      cashCount[step] = parseInt(ratio);
      restAmount = restAmount - parseInt(ratio) * step;
    }
  });
  return cashCount;
};

function CashRegister() {
  const [formData, setFormData] = useState({ bill: '', userCash: '' });
  const [formError, setFormError] = useState(null);
  const [cashCount, setCashCount] = useState({
    1: 0,
    5: 0,
    10: 0,
    20: 0,
    100: 0,
    500: 0,
    2000: 0,
  });

  let { bill, userCash } = formData;
  const onChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    setFormError(null);
    const billToPay = parseInt(bill);
    const cashUserHas = parseInt(userCash);
    if (billToPay > cashUserHas) {
      setFormError('Not enought cash given');
      setTimeout(() => setFormError(null), 5000);
      return;
    }
    const amoutToReturn = cashUserHas - billToPay;
    setCashCount((prev) => ({ ...prev, ...countCash(amoutToReturn) }));
  };

  return (
    <ProjectWrapper title='Cash Register'>
      <div className='cash-register'>
        <aside>
          <form onSubmit={onSubmit}>
            <div className='form-control'>
              <label htmlFor='bill'>Enter bill amount</label>
              <input
                id='bill'
                type='number'
                min='1'
                name='bill'
                value={bill}
                onChange={onChange}
              />
            </div>
            <div className='form-control'>
              <label htmlFor='user-cash'>Enter cash amount given by user</label>
              <input
                id='user-cash'
                type='number'
                min='1'
                name='userCash'
                value={userCash}
                onChange={onChange}
              />
            </div>
            <div className='form-control return-cash'>
              <strong>Cash to Return : </strong>
              <span> {userCash - bill}</span>
            </div>
            <button disabled={!bill || !userCash} type='Submit'>
              Calculate Note Count
            </button>
            <p className='form-error'>{formError}</p>
          </form>
        </aside>
        <ul className='cash-count-wrapper'>
          {Object.entries(cashCount).map(([cash, count], idx) => (
            <li key={idx}>
              <div className={`${count > 0 ? 'active' : ''}`}>
                <strong>{cash}</strong>
                <span>{count}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </ProjectWrapper>
  );
}

export default CashRegister;
