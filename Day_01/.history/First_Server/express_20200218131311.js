const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()
const port = 3000

res.sendFile(path.join(__dirname, 'index.html'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'videogames.html'))
  res.sendFile(path.join(__dirname, 'movies.html'))
  res.sendFile(path.join(__dirname, 'books.html'))
  res.sendFile(path.join(__dirname, 'songs.html'))

})

