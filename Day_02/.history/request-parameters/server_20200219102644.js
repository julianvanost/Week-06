const express = require('express')
const app = express()

app.get('/users/:name', (req, res) => {
  const name = req.param.name
  const password = req.param.password
  res.send(`<h1>User: ${name} Pass: ${password} </h1>`)
  console.log(req.param.name)
  console.log(req.param.password)
})
const PORT = 3000
app.listen(PORT)
console.log(`server is listening on port: ${PORT}`);
