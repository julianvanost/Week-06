const express = require('express')
const app = express()

app.get('/users/:name', (req, res) => {
  const name = req.query.name
  const password = req.query.password
  res.send(`<h1>User: ${username} Pass: ${password} </h1>`)
  console.log(req.query.username)
  console.log(req.query.password)
})
const PORT = 3000
app.listen(PORT)
console.log(`server is listening on port: ${PORT}`);
