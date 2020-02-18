const http = require('http')

const handleRequsts = (req, res) => {
  console.log(req.url)

}
const server = http.createServer(handleRequsts)


server.get(res.send('Hi there'))
const port = 3000
server.listen(port, () => console.log(`Port is on ${port}`))



// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))