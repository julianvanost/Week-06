const express = require('express')
const path = require('path')
const app = express()

app.get('/', (req, res) => {
  const a = pars(req.query.a)
  const b = pars(req.query.b)
  const op = pars(req.query.op)
  const op = req.query.b

})

app.listen(3000)

// localhost:3000/?a=5&b=10&op=add
// localhost:3000/?a=17&b=9&op=subtract
// localhost:3000/?a=11&b=8&op=multiply
// localhost:3000/?a=6&b=3&op=divide