import React from 'react';
import ReactDOM from 'react-dom';

export default (props) => (
  <strong>
    {parseInt(Math.random() * (props.max - props.min)) + props.min} 
  </strong>
);
