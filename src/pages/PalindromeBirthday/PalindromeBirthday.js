import { useState } from 'react';
import ProjectWrapper from '../../components/ProjectWrapper';
import calcPalindrome from './checkPalindrome';
import './PalindromeBirthday.css';

function PalindromeBirthday() {
  const [dob, setDob] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    calcPalindrome(dob);
  };

  return (
    <ProjectWrapper
      title='Palindrome Birthday'
      projectLink='https://github.com/neogcamp/build/blob/main/basics/palindrome-birthdays.md'
    >
      <main className='palindrome-birth'>
        <form onSubmit={onSubmit}>
          <div className='form-control'>
            <label htmlFor='dob'>Date of Birth</label>
            <input
              type='date'
              id='dob'
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <button disabled={!dob} type='submit'>
            Check Palindrome
          </button>
        </form>
      </main>
    </ProjectWrapper>
  );
}

export default PalindromeBirthday;
