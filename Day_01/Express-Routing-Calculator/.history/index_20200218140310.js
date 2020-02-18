const express = require('express')
const path = require('path')
const app = express()

app.get('/', (req, res) => {
  const a = parseInt(req.query.a)
  const b = parseInt(req.query.b)
  const op = parseInt(req.query.op)

  switch (req.query.op) {
    case "add":
        res.send(P)
      break;

    case "subtract":
res.send(P)
      break;

    case "multiply":
res.send(P)
      break;

    case "divide":
res.send(P)
      break;

    default:
      break;
  }
})

app.listen(3000)

// localhost:3000/?a=5&b=10&op=add
// localhost:3000/?a=17&b=9&op=subtract
// localhost:3000/?a=11&b=8&op=multiply
// localhost:3000/?a=6&b=3&op=divide