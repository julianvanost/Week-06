const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
  res.sendFile(path.join(__dirname, 'index.html'))
  res.sendFile(path.join(__dirname, 'index.html'))
  res.sendFile(path.join(__dirname, 'index.html'))
  res.sendFile(path.join(__dirname, 'index.html'))

})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))