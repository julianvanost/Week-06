const express = require('express')
const app = express()

app.get('/users/:name', (req, res) => {
  const name = req.params.name
  const password = req.params.password
  res.send(`<h1>User: ${name} Pass: ${password} </h1>`)
  console.log(req.params.name)
  console.log(req.params.password)
})
const PORT = 3000
app.listen(PORT)
console.log(`server is listening on port: ${PORT}`);
