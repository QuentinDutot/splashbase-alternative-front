const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cleanUrl = require('ssl-express-www')

const server = express()

server.use(cleanUrl)

server.use(express.static(path.join(__dirname, '../../../dist')))

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  next()
})

server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../dist', 'index.html'))
})

module.exports = server
