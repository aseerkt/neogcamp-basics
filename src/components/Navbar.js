import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <header className='navbar'>
      <nav className='container'>
        <Link to='/'>
          <h1>neogcamp basics</h1>
        </Link>

        <div className='navbar-right'>
          <ul>
            <li>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://github.com/aseerkt/neogcamp-basics'
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://aseerkt.vercel.app'
              >
                <FontAwesomeIcon icon={faGlobe} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
