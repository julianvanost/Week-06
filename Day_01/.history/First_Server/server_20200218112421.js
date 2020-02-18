const http = require('http')

const handleRequests = (req, res) => {
  console.log(req.url)
  switch (req.url) {
    case '/videgames':
      res.end(`<h1><b>VODEO GAMES!! - </b> You are the shite, son!!</h1>`)
      // console.log("Ya Shite!");
      break;
    case '/movies':
      res.end(`<h1><b>MOVIES!! - </b> You are correct, my son, I am a dookie</h1></b>`)
      // console.log("Ya Shite!");
      break;
    case '/books'
      res.end(`<h1><b>BOOKS!! - </b> Correct! You a filthy, rabid, and smelly dog</h1></b>`)
      // console.log("Ya Shite!");
      break;
    case '/songs'
      res.end(`<h1><b>SONGS!! - </b> Correct! You a filthy, rabid, and smelly dog</h1></br>`)
      // console.log("Ya Shite!");
      break;
    default:
      res.end(`<h1><b>Hi there!</h1></b>`)
      break;
  }
}

const server = http.createServer(handleRequests)

const port = 3000
server.listen(port, () => console.log(`Server is running on: http://localhost:${port}`))
// http://localhost:3000



// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))