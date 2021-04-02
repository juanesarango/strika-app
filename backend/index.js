// Setup Express Server
const express = require('express')
const app = express()
const server = require('http').Server(app)

const PORT = process.env.PORT || 3000

// Load Test Json
const fs = require('fs')
const data = JSON.parse(fs.readFileSync('test.json', 'utf8'))

app.get('/scores/:event', (req, res) => {
  res.json(data)
})

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
