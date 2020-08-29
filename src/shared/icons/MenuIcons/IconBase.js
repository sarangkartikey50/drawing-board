import React from 'react';

const IconBase = props => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    {props.children}
  </svg>
);

export default IconBase;