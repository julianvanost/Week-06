const express = require('express')
const app = express()
Set - ExecutionPolicy - ExecutionPolicy unrestricted


app.get('/users/:name', (req, res) => {
  console.log(req.params.name)
  console.log(req.params)
})
const PORT = 3000
app.listen(PORT)
console.log(`server is listening on port: ${PORT}`);