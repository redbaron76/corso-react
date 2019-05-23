import React from 'react';
import PropTypes from 'prop-types';

import '../styles/Display.scss';

const Display = props => {
  let size = null;

  console.log(props.value);

  switch (true) {
    case props.value.length >= 14:
      size = 32;
      break;
    case props.value.length >= 12:
      size = 34;
      break;
    case props.value.length >= 8:
      size = 40;
      break;
  }

  return (
    <div className="display">
      <div style={{ fontSize: size }}>{String(props.value).substring(0, 14)}</div>
    </div>
  );
};

Display.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Display;
