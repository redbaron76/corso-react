import React from 'react';
import PropTypes from 'prop-types';

import '../styles/Display.scss';

const Display = props => {
  return (
    <div className="display">
      <div>{props.value || '0'}</div>
    </div>
  );
};

Display.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Display;
