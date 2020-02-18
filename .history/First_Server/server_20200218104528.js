const http = require('http')

const handleRequsts = (req, res) => {
  console.log(req.url)

}
const server = http.createServer(handleRequsts)
server.listen(port () => console.log('POrt is on ${';
)
// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))