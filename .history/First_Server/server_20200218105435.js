const http = require('http')

const handleRequests = (req: any, res: any) => {
  console.log(req.url)
}
const server = http.createServer(handleRequests)
server.listen(3000)
// http://localhost:3000

// server.get(('/', req, res) => res.send('Hi there'))
server.listen(port, () => console.log(`Port is on ${port}`))



// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))