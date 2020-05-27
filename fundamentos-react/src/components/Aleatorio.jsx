import React from 'react';

export default (props) => (
  <strong>
    {parseInt(Math.random() * (props.max - props.min)) + props.min} 
  </strong>
);
