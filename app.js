const express = require('express')
const path = require('path')

const app = express()
const PORT = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + 'index.html'))
})

app.get('/cats', (req, res) => [
  res.sendFile(path.join(__dirname + '/public/cats/cats.html'))
])

app.get('/projects', (req, res) => {
  res.sendFile(path.join(__dirname) + '/public/projects/projects.html')
})

app.listen(PORT, () => {
  console.log(`my server running on localhost:${PORT}`)
})