import { useState } from 'react';
import ProjectWrapper from '../../components/ProjectWrapper';
import calcPalindrome from './checkPalindrome';
import './PalindromeBirthday.css';

function PalindromeBirthday() {
  const [dob, setDob] = useState('');
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const onSubmit = (e) => {
    setLoading(true);
    setMessage(null);
    e.preventDefault();
    calcPalindrome(dob, setMessage, setLoading);
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
          <button disabled={!dob || loading} type='submit'>
            Check Palindrome
          </button>
        </form>
        <section className='pal-result'>
          {loading && 'Checking Palindrome nature'}
          {!message && !loading ? 'Fill in DOB' : message}
        </section>
      </main>
    </ProjectWrapper>
  );
}

export default PalindromeBirthday;
