const routerApi = require('./routes')
const express = require('express')
const app = express()
const port = 3000

routerApi(app)

app.get('/index', (req, res) => {
  res.send('Hi body! Welcome to the new experience')
})

app.get('/otra-ruta', (req, res) => {
  res.send('Hi! This is other route')
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
