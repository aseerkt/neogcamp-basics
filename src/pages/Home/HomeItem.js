import { Link } from 'react-router-dom';
import './HomeItem.css';

function HomeItem({ path, name }) {
  if (!name) return null;

  return (
    <li>
      <Link to={path}>
        <article className='home-item'>
          <h2>{name}</h2>
        </article>
      </Link>
    </li>
  );
}

export default HomeItem;
