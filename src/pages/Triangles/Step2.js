import { useEffect, useState } from 'react';
import './Step2.css';

function generateThreeRandomAngle() {
  let a_1;
  if (Math.random() < 0.2) a_1 = 90;
  else a_1 = Math.round(Math.random() * 170);
  const a_2 = Math.round(Math.random() * (170 - a_1));
  const a_3 = 180 - (a_1 + a_2);

  const angles = [a_1, a_2, a_3];
  // angles: [angle 1, angle 2, angle 3]
  return angles;
}

function getTriangleState(angles) {
  const isAcute = angles.every((ang) => ang < 90);
  const isObtuse = angles.some((ang) => ang > 90);

  const state = isAcute ? 'acute' : isObtuse ? 'obtuse' : 'right';
  // state: 'acute' | 'obtuse' | 'right'
  return state;
}

function Step2() {
  const [angles, setAngles] = useState([]);
  const [message, setMessage] = useState(null);
  const [state, setState] = useState('');

  useEffect(() => {
    setAngles(generateThreeRandomAngle());
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    setMessage(null);
    const triangleState = getTriangleState(angles);

    if (state === triangleState)
      setMessage(
        `You are right. the given angles constructs ${triangleState} triangle`
      );
    else
      setMessage(`You are wrong, these angles do not give ${state} triangle`);
  };

  return (
    <main className='two-grid'>
      <form onSubmit={onSubmit}>
        <ul className='angles-showcase'>
          {angles.map((ang) => (
            <li key={ang}>{ang}°</li>
          ))}
          <li>
            <button
              type='button'
              onClick={() => {
                setAngles(generateThreeRandomAngle());
                setMessage(null);
              }}
            >
              Refresh
            </button>
          </li>
        </ul>
        <div className='form-control'>
          <label htmlFor='state'>
            Is the Triangle with these angles <strong>acute</strong>,{' '}
            <strong>right</strong> or <strong>obtuse</strong>?
          </label>
          <select
            name='state'
            id='state'
            value={state}
            onChange={(e) => setState(e.target.value)}
          >
            <option disabled value=''>
              Select one
            </option>
            <option value='acute'>Acute</option>
            <option value='right'>Right</option>
            <option value='obtuse'>Obtuse</option>
          </select>
        </div>
        <button disabled={state === ''} type='submit'>
          Check
        </button>
      </form>
      <section className='result'>
        {message ? message : 'Please select one option'}
      </section>
    </main>
  );
}

export default Step2;
