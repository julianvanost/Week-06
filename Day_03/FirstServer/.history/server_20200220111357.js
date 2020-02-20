const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()
// BELOW
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
// ^^^ EVERY TIME WE USE A SERVER BASED APP, WE USE THESE THREE LINES ^^^^^

app.get('/fridge', (req, res) => {


})

app.get('/fridge/:item', (req, res) => {


})

app.get('/fridge', (req, res) => {


})


app.get('/fridge', (req, res) => {
  fs.readFile('fridge.json', 'utf8', (e, data) => {
    if (e) { console.log(e) }
    const fridge = JSON.parse(data)
    res.json(fridge)
  })
})

app.post('/fridge', (req, res) => {
  fs.readFile('fridge.json', 'utf8', (e, data) => {
    if (e) { console.log(e) }

    const fridge = JSON.parse(data)

    fridge.push(req.body)

    fs.writeFile('fridge.json', JSON.stringify(fridge), e => {
      if (e) { console.log(e) }
      res.sendStatus(200)
    })
  })
})

app.listen(3000)
