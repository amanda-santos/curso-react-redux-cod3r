import React from 'react'
import produtos from '../../data/produtos'
import './TabelaProdutos.css'

export default (props) => {
  const produtosTabela = produtos.map((produto, i) => {
    return (
      <tr key={produto.id} className={i % 2 === 0 ? 'par' : 'impar'}>
        <td>{produto.id}</td>
        <td>{produto.nome}</td>
        <td>R$ {produto.preco.toFixed(2).replace('.', ',')}</td>
      </tr>
    )
  });

  return (
    <table>
      <tr>
        <th>ID</th>
        <th>Produto</th>
        <th>Preço</th>
      </tr>
      {produtosTabela}
    </table>
  )
}