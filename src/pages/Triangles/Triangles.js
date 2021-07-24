import ProjectWrapper from '../../components/ProjectWrapper';
import StepSelector from './StepSelector';
import StepShow from './StepShow';
import Step1 from './Step1';
import Step2 from './Step2';
import { useParams } from 'react-router-dom';
import Step3 from './Step3';
import Step5 from './Step5';
import Step4 from './Step4';
import './Triangles.css';
import Step6 from './Step6';

function Triangles() {
  const { step } = useParams();

  const components = [Step1, Step2, Step3, Step4, Step5, Step6];

  return (
    <ProjectWrapper
      title='Learn Triangle'
      projectLink='https://github.com/neogcamp/build/blob/main/basics/learn-triangles.md'
    >
      <StepSelector step={step} totalSteps={components.length} />
      <StepShow components={components} step={step} />
    </ProjectWrapper>
  );
}

export default Triangles;
