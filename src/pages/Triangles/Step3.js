import { useEffect, useState } from 'react';

function generateTwoRandomAngle() {
  let a_1;
  if (Math.random() < 0.2) a_1 = 90;
  else a_1 = Math.round(Math.random() * 170);
  const a_2 = Math.round(Math.random() * (170 - a_1));

  const angles = [a_1, a_2];
  // angles: [angle 1, angle 2, angle 3]
  return angles;
}

function Step3() {
  const [message, setMessage] = useState('');
  const [angles, setAngles] = useState([]);
  const [angle3, setAngle3] = useState('');

  useEffect(() => {
    setAngles(generateTwoRandomAngle());
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const isThirdAngle =
      angles.reduce((prev, curr) => prev + curr, parseFloat(angle3)) === 180;
    if (!isThirdAngle) {
      setMessage('The third angle does not make a triangle');
    } else {
      setMessage('Correct');
    }
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
                setAngles(generateTwoRandomAngle());
                setMessage(null);
              }}
            >
              Refresh
            </button>
          </li>
        </ul>
        <div className='form-control'>
          <label htmlFor='angle3'>What is the third angle?</label>
          <input
            type='number'
            min='0'
            max='180'
            id='angle3'
            value={angle3}
            onChange={(e) => setAngle3(e.target.value)}
          />
        </div>
        <button type='submit' disabled={!angle3}>
          Check
        </button>
        <div className='form-control'></div>
      </form>
      <section className='result'>{message}</section>
    </main>
  );
}

export default Step3;
