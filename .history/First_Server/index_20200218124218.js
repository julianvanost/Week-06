const http = require('http')
const fs = require('fs')

const handleRequests = (req, res) => {
  console.log(req.url)
  fs.readFile('index.html', 'utf8', (e, html) => {
    if (e) { console.log(e) }
    let title = url
    switch (req.url) {
      case '/videogames':
        title = "videogames"
        if (condition) {
          
        }
        res.end(`<!DOCTYPE html>
                <html> 
                  <head>
                    <meta charset="utf-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <title>${title}</title>
                    <meta name="description" content="">
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                    <link rel="stylesheet" href="">
                  </head>
                  <body>    
                    <h1>${title}</h1>
                        <p>
                          <ul>
                            <li>${item}</li>
                            <li>${item}</li>
                            <li>${item}</li>
                            <li>${item}</li>
                            <li>${item}</li>
                          </ul>
                        </p>
                  </body>
                </html>  
            `)
        break;
      case '/movies':
        title = "movies"
        res.end(`<!DOCTYPE html>
                <html> 
                  <head>
                    <meta charset="utf-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <title>${title}</title>
                    <meta name="description" content="">
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                    <link rel="stylesheet" href="">
                  </head>
                  <body>    
                    <h1>${title}</h1>
                        <p>
                          <ul>
                            <li>${item}</li>
                            <li>${item}</li>
                            <li>${item}</li>
                            <li>${item}</li>
                            <li>${item}</li>
                          </ul>
                        </p>
                  </body>
                </html>  
            `)






        res.end(html)
    })
}








const server = http.createServer(handleRequests)
const port = 3001
server.listen(port, () => console.log(`Server is running on: http://localhost:${port}`))
// http://localhost:3001