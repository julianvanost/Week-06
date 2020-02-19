const express = require('express')
const app = express()

app.get('/users/:name', (req, res) => {
  console.log(req.params.name)
  console.log(req.param)
})
const PORT = 3000
app.listen(PORT)
console.log(`server is listening on port: ${PORT}`);
