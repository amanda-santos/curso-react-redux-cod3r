const express = require('express')
const server = express()
const router = require('./ex-05_routes')

server.use('/api', router)

// define a porta e escreve 'Executando...'
server.listen(3000, () => console.log('Executando...'))

