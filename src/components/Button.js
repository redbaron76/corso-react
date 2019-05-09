import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  return <span onClick={() => props.click(props.label)}>{props.label || 'btn'}</span>;
};

Button.propTypes = {
  click: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default Button;
