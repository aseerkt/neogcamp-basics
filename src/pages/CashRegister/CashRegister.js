import { useEffect } from 'react';
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

const initialCashCount = {
  1: 0,
  5: 0,
  10: 0,
  20: 0,
  100: 0,
  500: 0,
  2000: 0,
};

function CashRegister() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({ bill: '', userCash: '' });
  const [formError, setFormError] = useState(null);
  const [cashCount, setCashCount] = useState(initialCashCount);

  let { bill, userCash } = formData;
  const onChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (e.target.name === 'bill') {
      if (e.target.value > 0) setShow(true);
      else setShow(false);
    }
  };

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
    setCashCount((prev) => ({
      ...initialCashCount,
      ...countCash(amoutToReturn),
    }));
  };

  useEffect(() => {
    if (!bill || !userCash) {
      setCashCount(initialCashCount);
    }
  }, [bill, userCash]);

  return (
    <ProjectWrapper
      title='Cash Register'
      projectLink='https://github.com/neogcamp/build/blob/main/basics/cash-register-manager.md'
    >
      <div className='cash-register'>
        <aside>
          <form onSubmit={onSubmit}>
            <div className='form-control'>
              <label htmlFor='bill'>Bill Amount</label>
              <input
                id='bill'
                type='number'
                min='1'
                name='bill'
                value={bill}
                onChange={onChange}
                placeholder='Enter bill amount'
              />
            </div>
            {show && (
              <>
                <div className='form-control'>
                  <label htmlFor='user-cash'>Cash Given</label>
                  <input
                    id='user-cash'
                    type='number'
                    min='1'
                    name='userCash'
                    value={userCash}
                    onChange={onChange}
                    placeholder='Enter cash amount given by user'
                  />
                </div>
                <div className='form-control return-cash'>
                  <strong>Cash to Return : </strong>
                  <span
                    style={{ color: userCash - bill > 0 ? 'green' : 'red' }}
                  >
                    {' '}
                    {userCash > 0 ? userCash - bill : '__'}
                  </span>
                </div>
              </>
            )}
            <div className='bottom-stuff'>
              <button disabled={!bill || !userCash} type='Submit'>
                Calculate Note Count
              </button>
              <p className='form-error'>{formError}</p>
            </div>
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
