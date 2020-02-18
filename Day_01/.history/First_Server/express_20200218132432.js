const express = require('express')
const path = require('path')
const app = express()

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/videogames', (req, res) => {
  res.sendFile(path.join(__dirname, 'videogames.html'))
})

app.get('/movies', (req, res) => {
  res.sendFile(path.join(__dirname, 'movies.html'))
})

app.get('/books', (req, res) => {
  res.sendFile(path.join(__dirname, 'books.html'))
})

app.get('/songs', (req, res) => {
  res.sendFile(path.join(__dirname, 'songs.html'))
  res.sendStatus(stats)
})

app.get('/hotdog', (req, res) => {

})

app.listen(3000)