const http = require('http')

const handleRequests = (req, res) => {
  console.log(req.url)
  switch (req.url) {
    case '/shit':
      res.end(`<h1><b>You are the shite, son!!</h1></b>`)
      console.log("Ya Shite!");
      break;
    case '/dookie':
      res.end(`<h1><b>You are correct, my son, I am a dookie</h1></b>`)
      console.log("Ya Shite!");
      break;
    case '/dog'
      res.end(`<h1><b>Correct! You a filthy, rabid, and smelly dog</h1></b>`)
      console.log("Ya Shite!");
      break;
    default:
      res.end(`<h1><b>Hi there!</h1></b>`)
      break;
  }
}
const server = http.createServer(handleRequests)


// http://localhost:3000
const port = 3000
server.listen(port, () => console.log(`Server is running on: http://localhost:${port}`))



// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))