const http = require('http')
const fs = require('fs')

const handleRequests = (req, res) => {
  console.log(req.url)
  fs.readFile('index.html', 'utf8', (e, html) => {
    if (e) { console.log(e) }
    res.end(html)
  })
    let title = url
    switch (req.url) {
      case '/videogames':
        html(`<!DOCTYPE html>
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
                            <li>Megaman</li>
                            <li>Gears of War</li>
                            <li>Halo 3</li>
                            <li>Death Stranding</li>
                            <li>Resident Evil 2</li>
                          </ul>
                        </p>
                  </body>
                </html>  
            `)
        break;
      case '/movies':
        title = "videogames"
        html(`<!DOCTYPE html>
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
                            <li>Ninja Turtles</li>
                            <li>Goodfellas</li>
                            <li>Grounhog Day</li>
                            <li>Rambo</li>
                            <li>The Room</li>
                          </ul>
                        </p>
                  </body>
                </html>  
            `)
        break;
      case '/books':
        html(`<!DOCTYPE html>
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
                            <li>Megaman the Guide</li>
                            <li>Gears of War Guide</li>
                            <li>Halo 3 Guide</li>
                            <li>Hideo Kojima Autobiography</li>
                            <li>Resident Evil 2 Guide</li>
                          </ul>
                        </p>
                  </body>
                </html>  
            `)
        break;
      case '/songs':
        html(`<!DOCTYPE html>
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
                            <li>Megaman Theme Song</li>
                            <li>Gears of War Theme Song</li>
                            <li>Halo 3 Theme Song</li>
                            <li>Death Stranding Theme Song</li>
                            <li>Resident Evil 2 Theme Song</li>
                          </ul>
                        </p>
                  </body>
                </html>  
            `)
        break;
      default:
        html(`<h1><b>Hi there!</h1>`)
        break;




     


}








const server = http.createServer(handleRequests)
const port = 3001
server.listen(port, () => console.log(`Server is running on: http://localhost:${port}`))
// http://localhost:3001