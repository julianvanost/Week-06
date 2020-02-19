// http://localhost:3000/?username=johnDoe&password=pass1234
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  const username = parseInt(req.query.username)
  const password = parseInt(req.query.password)
  res.send(`${username}`)
  res.send(`${password}`)
})

app.listen(3000)
