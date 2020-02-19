const express = require('express')
const app = express()

app.get('/users/:name', (req, res) => {
  // const name = req.params
  // const password = req.params
  // res.send(`<h1>User: ${name} Pass: ${password} </h1>`)
  // console.log(req.params)
  console.log(req.params)
})
const PORT = 3000
app.listen(PORT)
console.log(`server is listening on port: ${PORT}`);
