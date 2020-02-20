const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))




app.get('/refrigerator', (req, res) => {
  fs.readFile('refrigerator.json', 'utf8', (e, data) => {
    if (e) { console.log(e) }

    const refrigerator = JSON.parse(data)

    res.json(refrigerator)
  })
})

app.post('/refrigerator', (req, res) => {
  fs.readFile('refrigerator.json', 'utf8', (e, data) => {
    if (e) { console.log(e) }

    const refrigerator = JSON.parse(data)

    refrigerator.push(req.body)

    fs.writeFile('refrigerator.json', JSON.stringify(refrigerator), e => {
      if (e) { console.log(e) }
      res.sendStatus(200)
    })
  })
})

app.listen(3000)
