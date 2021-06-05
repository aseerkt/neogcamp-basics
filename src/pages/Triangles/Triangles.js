import ProjectWrapper from '../../components/ProjectWrapper';
import StepSelector from './StepSelector';
import StepShow from './StepShow';
import Step1 from './Step1';
import Step2 from './Step2';
import { useParams } from 'react-router-dom';
import Step3 from './Step3';

function Triangles() {
  const { step } = useParams();

  return (
    <ProjectWrapper
      title='Learn Triangle'
      projectLink='https://github.com/neogcamp/build/blob/main/basics/learn-triangles.md'
    >
      <StepSelector step={step} totalSteps={4} />
      <StepShow components={[Step1, Step2, Step3]} step={step} />
    </ProjectWrapper>
  );
}

export default Triangles;
