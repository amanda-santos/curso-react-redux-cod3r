import React, { useState } from 'react'

import './Megasena.css';

export default (props) => {
  // método que gera um número entre min-max que não está contido no array passado por parâmetro
  function gerarNumeroNaoContido(min, max, array) {
    const aleatorio = parseInt(Math.random() * (max + 1 - min) + min);
    // se o número aleatório estiver incluído no array, chama o próprio método de novo recursivamente
    // senão, retorna o número aleatório gerado
    return array.includes(aleatorio) ?
      gerarNumeroNaoContido(min, max, array) :
      aleatorio;
  }

  function gerarNumeros(qtde) {
    const numeros = Array(qtde)
      .fill(0)
      .reduce((nums) => {
        const novoNumero = gerarNumeroNaoContido(1, 60, nums)
        console.log([...nums, novoNumero]);
        return [...nums, novoNumero]
      }, [])
      .sort((n1, n2) => n1 - n2);
    return numeros;
  }
  
  const [qtde, setQtde] = useState(props.qtde || 6);
  const numerosIniciais = gerarNumeros(qtde);
  const [numeros, setNumeros] = useState(numerosIniciais);

  return (
    <div className="Mega">
      <h2>Megasena</h2>
      <h3>{numeros.join(' ')}</h3>
      <div>
        <label>Quantidade de Números </label>
        <input 
          min="6"
          max="15"
          type="number" 
          value={qtde} 
          onChange={(e) => {
            setQtde(+e.target.value)
            setNumeros(gerarNumeros(+e.target.value))
          }}
        />
      </div>
      <br/>
      <button onClick={_ => setNumeros(gerarNumeros(qtde))}>
        Gerar Números
      </button>
    </div>
  );
}