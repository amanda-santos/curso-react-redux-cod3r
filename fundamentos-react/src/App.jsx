import React from 'react';
import ReactDOM from 'react-dom';

import Aleatorio from './components/Aleatorio';

export default () => (
  <React.Fragment>
    Aleatório de 1 a 5: <Aleatorio min={1} max={5} />
    <br/>
    Aleatório de 1 a 10: <Aleatorio min={1} max={10} />
    <br/>
    Aleatório de 3 a 8: <Aleatorio min={3} max={8} />
    <br/>
    Aleatório de 1002 a 1005: <Aleatorio min={1002} max={1005} />
  </React.Fragment>
);