const http = require('http')
const fs = require('fs')

const handleRequests = (req, res) => {
  console.log(req.url)
  fs.readFile('index.html', 'utf8', (e, html) => {
    if (e) {console.log(e)}
    res.end(html)  
    )}
  }

const server = http.createServer(handleRequests)

const port = 3000
server.listen(port, () => console.log(`Server is running on: http://localhost:${port}`))
// http://localhost:3000