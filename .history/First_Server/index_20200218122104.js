const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const handleRequests = (req, res) => {
  console.log(req.url)
  switch (req.url) {
    case '/videgames':
      res.end(`<h1><b>VIDEO GAMES!!!</h1><br><br>
                <h1>You are the shite, son!!</h1>
                <p>
                  <ul>
                    <li>Megaman</li>
                    <li>Gears of War</li>
                    <li>Halo 3</li>
                    <li>Death Stranding</li>
                    <li>Resident Evil 2</li>
                  </ul>
                </p>
      
      `)
      console.log("Ya Shite!");
      break;
    case '/movies':
      res.end(`<h1><b>MOVIES!<br><br></b>You are correct, my son, I am a dookie</h1>`)
      console.log("Ya Shite!");
      break;
    case '/books':
      res.end(`<h1><Correct!>BOOKS!!<br><br></b></Correct! You a filthy, rabid, and smelly dog</h1>
              <img src="https://media3.giphy.com/media/CqVNwrLt9KEDK/giphy.gif?cid=6104955ed0fbd3304053b77ab3b37a391aa6497a47f860ca&rid=giphy.gif" alt="Angry cat"></img>`)
      console.log("Ya Shite!");
      break;
    case '/songs':
      res.end(`<h1><b>SONGS!!<br><br></b>Correct! You a filthy, rabid, and smelly dog</h1>`)
      console.log("Ya Shite!");
      break;
    default:
      res.end(`<h1><b>Hi there!</h1>`)
      break;
  }
}