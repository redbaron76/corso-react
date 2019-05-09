import React from 'react';
import PropTypes from 'prop-types';

import '../styles/Button.scss';

const Button = props => {
  return (
    <div className="btn" onClick={() => props.click(props.label)}>
      {props.label || 'btn'}
    </div>
  );
};

Button.propTypes = {
  click: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default Button;
