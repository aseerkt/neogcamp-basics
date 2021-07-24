import { useEffect, useState } from 'react';
import FormControl from '../../components/FormControl';

function Step5() {
  const [message, setMessage] = useState(null);
  const [leg1, setLeg1] = useState('');
  const [leg2, setLeg2] = useState('');
  const [angle, setAngle] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <main className='two-grid'>
      <form onSubmit={onSubmit}>
        <h3>Give two sides, the angle between them and get the hypotenuse</h3>

        <FormControl
          label='Side 1'
          type='number'
          name='leg1'
          id='leg1'
          min='1'
          value={leg1}
          onChange={(e) => setLeg1(e.target.value)}
        />
        <FormControl
          label='Side 2'
          type='number'
          name='leg2'
          id='leg2'
          min='1'
          value={leg2}
          onChange={(e) => setLeg2(e.target.value)}
        />
        <FormControl
          label='Angle between the legs'
          type='number'
          name='angle'
          id='angle'
          min='1'
          max='180'
          value={angle}
          onChange={(e) => setAngle(e.target.value)}
        />
        <button type='submit' disabled={!leg1 || !leg2 || !angle}>
          Get hypotenuse
        </button>
      </form>
      <section className='result'>{message}</section>
    </main>
  );
}

export default Step5;
