import PropTypes from 'prop-types';

function FormControl({ label, ...props }) {
  return (
    <div className='form-control'>
      <label htmlFor={props.id}>{label}</label>
      <input {...props} />
    </div>
  );
}

FormControl.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default FormControl;
