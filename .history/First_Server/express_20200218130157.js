const express = require('express')
const path = require('path')
const app = express()
const  = 3002
app.listen(3000)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))