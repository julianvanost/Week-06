const http = require('http')

const handleRequests = (req, res) => {
  console.log(req.url)
  res.end(`<h1><b>Fuck off, ya wee shite!</h1></b>`)
}
const server = http.createServer(handleRequests)
// http://localhost:3000

switch (req) {
  case 'shit':
    res.end(`<h1><b>You are the shite, son!!</h1></b>`)
    
    break;

  default:
    break;
}

const port = 3000
server.listen(port, () => console.log(`Port is on ${port}`))



// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))