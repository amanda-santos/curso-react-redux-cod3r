const express = require('express')
const server = express()

// localhost:3000
server.get('/', function(req, res) {
  res.send('<h1>Index</h1>')
})

// localhost:3000/teste
server.all('/teste', function(req, res) {
  res.send('<h1>teste</h1>')
})

// sempre que tiver 'api' na url
server.get(/api/, function(req, res) {
  res.send('<h1>API</h1>')
})

// define a porta e escreve 'Executando...'
server.listen(3000, () => console.log('Executando...'))

