const express = require('express')
const path = require('path')
const app = express()
app.listen(3000)


const port = 3000
app.get('/', (req, res) => {
  res.sendFile(path.join(,))
  )
}
app.listen(port, () => console.log(`Example app listening on port ${port}!`))