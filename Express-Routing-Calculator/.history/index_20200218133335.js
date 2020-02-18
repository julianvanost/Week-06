const express = require('express')
const path = require('path')
const app = express()

app.get('/hotdog', (req, res) => {
  res.sendStatus(418)
  res.json({
    name: 'johnny boy',
    age: 48,
  })
  console.log(req.url)
  console.log(req.query)
  res.send("hello")

})

app.listen(3000)