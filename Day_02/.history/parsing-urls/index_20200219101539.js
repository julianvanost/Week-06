// http://localhost:3000/?username=johnDoe&password=pass1234
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  const username = req.query.username
  const password = req.query.password
  res.send(`${username} ${password}`)
})
const PORT = 
app.listen(PORT)
console.log();
