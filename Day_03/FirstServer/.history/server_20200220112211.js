const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()

// READ BELOW
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
// ^^^ EVERY TIME WE USE A SERVER BASED APP, WE USE THESE THREE LINES ^^^^^

app.get('/fridge', (req, res) => {
  fs.readFile('fridge.json', 'utf8', (err, fridge) => {
    if (err) { console.log(err) }
    res.json(JSON.parse(fridge))
  })
})

app.get('/fridge/:item', (req, res) => {
  fs.readFile('fridge.json', 'utf8', (err, data) => {
    if (err) { console.log(err) }
    const fridge = JSON.parse(data)
    res.json(fridge.filter(food => food.item === req.param.item)[0])
  })
})


app.post('/fridge', (req, res) => {
  fs.readFile('fridge.json', 'utf8', (err, fridge) => {
    if (err) { console.log(err) }

    const fridge = JSON.parse(fridge)

    fridge.push(req.body)

    fs.writeFile('fridge.json', JSON.stringify(fridge), err => {
      if (err) { console.log(err) }
      res.sendStatus(200)
    })
  })
})

app.listen(3000)
