import { useHistory } from 'react-router-dom';
import './StepSelector.css';

function calcProgressWidth(step, totalSteps) {
  return Math.ceil((step / (totalSteps - 1)) * 100);
}

function StepSelector({ step, totalSteps }) {
  const history = useHistory();

  return (
    <div className='step-selector'>
      <div
        className='step-progress'
        style={{ width: `calc(${calcProgressWidth(step, totalSteps)}%)` }}
      ></div>
      {new Array(totalSteps).fill('step').map((_, i) => (
        <button
          className={`step ${step === i ? 'current' : ''}`}
          key={i}
          data-step={i}
          onClick={() => history.push(`/triangles/${i}`)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}

export default StepSelector;
