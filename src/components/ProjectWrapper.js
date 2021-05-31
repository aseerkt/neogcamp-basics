import PropTypes from 'prop-types';

function ProjectWrapper({ title, children }) {
  return (
    <div className='project-wrapper'>
      <h2 className='project-title'>{title}</h2>
      <hr />
      <br />
      <div className='project-content'>{children}</div>
    </div>
  );
}

ProjectWrapper.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ProjectWrapper;
