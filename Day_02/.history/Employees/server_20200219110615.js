const fs = require('fs')
const express = require('express')
const app = express()


app.get('./employees', (req, res) => {
  fs.readFile('emplyees.json')


  const employees = JSON.parse(data)
  res.json(employees)
})