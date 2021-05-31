import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './HomeItem.css';

function HomeItem({ routeData }) {
  if (!routeData.name) return null;

  return (
    <li className='home-li'>
      <img src={`${routeData.path}.jpg`} alt={routeData.name} />
      <Link to={routeData.path}>
        <article className='home-item'>
          <h2>{routeData.name}</h2>
        </article>
      </Link>
    </li>
  );
}

HomeItem.propTypes = {
  routeData: PropTypes.object.isRequired,
};

export default HomeItem;
