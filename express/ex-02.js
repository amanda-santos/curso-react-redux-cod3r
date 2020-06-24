const express = require('express')
const server = express()

server.get('/', function(req, res, next) {
  console.log('Início');
  next()
  console.log('Fim');
})

server.get('/', function(req, res) {
  console.log('Resposta');
  res.send('<h1>Olá</h1>')
})

// define a porta e escreve 'Executando...'
server.listen(3000)

