import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './HomeItem.css';

function HomeItem({ routeData }) {
  const { path, name } = routeData;
  if (!name) return null;

  return (
    <li className='home-li'>
      <img src={`${path}.jpg`} alt={name} />
      <Link to={path === '/triangles' ? `${path}/0` : path}>
        <article className='home-item'>
          <h2>{name}</h2>
        </article>
      </Link>
    </li>
  );
}

HomeItem.propTypes = {
  routeData: PropTypes.object.isRequired,
};

export default HomeItem;
