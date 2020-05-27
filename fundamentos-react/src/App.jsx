import React from 'react';

import Aleatorio from './components/Aleatorio';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import Input from './components/formulario/Input'
import Contador from './components/contador/Contador'
import Megasena from './components/megasena/Megasena'

export default () => (
  <React.Fragment>
    Aleatório de 1 a 5: <Aleatorio min={1} max={5} />
    <br />
    Aleatório de 1 a 10: <Aleatorio min={1} max={10} />
    <br />
    Aleatório de 3 a 8: <Aleatorio min={3} max={8} />
    <br />
    Aleatório de 1002 a 1005: <Aleatorio min={1002} max={1005} />
    <br /><br />
    <TabelaProdutos />
    <br /><br />
    <ParOuImpar numero={22}></ParOuImpar>
    <UsuarioInfo usuario={{ nome: "Amanda" }} />
    {/* <UsuarioInfo usuario={{}} />
    <UsuarioInfo /> */}
    <br/><br/>
    <DiretaPai></DiretaPai>
    <IndiretaPai></IndiretaPai>
    <br/><br/>
    <Input />
    <br/><br/>
    <Contador numeroInicial={100} />
    <br/><br/>
    <Megasena />
  </React.Fragment>
);