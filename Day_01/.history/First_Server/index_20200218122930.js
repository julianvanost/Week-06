const http = require('http')
const fs = require('fs')

const handleRequests = (req, res) => {
  console.log(req.url)
  fs.readFile('index.html', 'uf')