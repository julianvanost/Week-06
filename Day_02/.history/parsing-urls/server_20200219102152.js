// http://localhost:3000/?username=johnDoe&password=pass1234
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  const username = req.query.username
  const password = req.query.password
  res.send(`<h1>User:</h1>${username} Pass: ${password} </h1>`)
  console.log(req.query.username)
  console.log(req.query.password)
})
const PORT = 3000
app.listen(PORT)
console.log(`server is listening on port: ${PORT}`);
