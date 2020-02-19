const fs = require('fs')
const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('./employees', (req, res) => {
  fs.readFile('emplyees.json', 'utf8', (e, data)
    => {
    if (e) { console.log(e) }
    const employees = JSON.parse(data)

    res.json(employees)

  })
})

app.post('./employees', (req, res) => {
  fs.readFile('emplyees.json', 'utf8', (e, data)
    => {
    if (e) { console.log(e) }

    const employees = JSON.parse(data)

    emplees.push(req.body)

    fs.writeFile('./employees.json', JSON.stringify(employees),
      => {
        if(e) { console.log(e) }
    res.sendStatus(200)
      })
  })
})