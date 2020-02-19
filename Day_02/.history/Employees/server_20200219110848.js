const fs = require('fs')
const express = require('express')
const app = express()


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
  
    req.body.push
  })
})