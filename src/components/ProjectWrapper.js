import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import './ProjectWrapper.css';

function ProjectWrapper({ title, children, projectLink }) {
  return (
    <div className='project-wrapper'>
      <h2 className='project-title'>{title}</h2>
      <a
        className='top-info'
        target='_blank'
        rel='noreferrer'
        href={projectLink}
      >
        <FontAwesomeIcon icon={faInfoCircle} />
        <span>More info</span>
      </a>
      <hr />
      <br />
      <br />
      <div className='project-content'>{children}</div>
    </div>
  );
}

ProjectWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired,
};

export default ProjectWrapper;
