const http = require('http')
const fs = require('fs')

const handleRequests = (req, res) => {
  console.log(req.url)
  fs.readFile('index.html', 'utf8', (e, html) => {
    if (e) {console.log(e)}
    res.end(html)  
    )}
  }

  cons