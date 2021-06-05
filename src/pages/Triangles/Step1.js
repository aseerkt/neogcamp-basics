import { useState } from 'react';
import FormControl from '../../components/FormControl';

function Step1() {
  const [angleData, setAngleData] = useState({
    angle1: '',
    angle2: '',
    angle3: '',
  });
  const [message, setMessage] = useState(null);

  const { angle1, angle2, angle3 } = angleData;

  const onChange = (e) =>
    setAngleData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    setMessage(null);
    const a_1 = parseInt(angle1);
    const a_2 = parseInt(angle2);
    const a_3 = parseInt(angle3);
    if (a_1 + a_2 + a_3 === 180)
      setMessage('These angles could make a triangle');
    else setMessage("These angle won't make a triangle");
  };
  return (
    <main className='two-grid'>
      <form onSubmit={onSubmit}>
        <h3>Give three angles that could make a triangle</h3>
        <FormControl
          id='angle1'
          label='Angle 1'
          type='number'
          min='1'
          max='180'
          name='angle1'
          value={angle1}
          onChange={onChange}
        />
        <FormControl
          id='angle2'
          label='Angle 2'
          type='number'
          min='1'
          max='180'
          name='angle2'
          value={angle2}
          onChange={onChange}
        />
        <FormControl
          id='angle3'
          label='Angle 3'
          type='number'
          min='1'
          max='180'
          name='angle3'
          value={angle3}
          onChange={onChange}
        />
        <button disabled={!angle1 || !angle2 || !angle3} type='submit'>
          Check
        </button>
      </form>
      <section className='result'>{message}</section>
    </main>
  );
}

export default Step1;
