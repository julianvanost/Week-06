const http = require('http')

const handleRequests = (req, res) => {
  console.log(req.url)
  res.end(`<h1><b>Fuck off, ya wee shite!</h1></b>`)
}
const server = http.createServer(handleRequests)
// http://localhost:3000

req.ur  case 'shit':
    res.end(`<h1><b>You are the shite, son!!</h1></b>`)
    console.log("Ya Shite!");
    break;
  case 'dookie':
    res.end(`<h1><b>You are correct, my son, I am a dookie</h1></b>`)
    console.log("Ya Shite!");
    break;
  case 'dogs':
    res.end(`<h1><b>You a filthy dog</h1></b>`)
    console.log("Ya Shite!");
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