import { useState } from 'react';
import FormControl from '../../components/FormControl';

function Step6() {
  const [height, setHeight] = useState('');
  const [base, setBase] = useState('');
  const [message, setMessage] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    const area = 0.5 * parseFloat(height) * parseFloat(base);
    setMessage(`Triangle area: ${area}`);
  };
  return (
    <main className='two-grid'>
      <form onSubmit={onSubmit}>
        <h3>Triangle Area Calculator</h3>
        <h4>Give height and base to find the area</h4>
        <FormControl
          type='number'
          label='Base'
          id='base'
          name='base'
          value={base}
          onChange={(e) => setBase(e.target.value)}
        />
        <FormControl
          type='number'
          label='Height'
          id='height'
          name='height'
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <button type='submit' disabled={!height || !base}>
          Get triable area
        </button>
      </form>
      <section className='result'>{message}</section>
    </main>
  );
}

export default Step6;
