const express = require('express')
const path = require('path')
const app = express()

app.get('/', (req, res) => {
  const numOne = '?a'
  const numTwo = '&b'
  const equals = '='
  const add = "&op=add"
  const subtract = "&op=subtract"
  const multiply = "&op=multiply"
  const divide = "&op=divide"

  if req.url.includes('&op=add'):
      
      break;
  
    default:
      break;
  }

  console.log(req.url)
  console.log(req.query)
  res.send("hello")

})

app.listen(3000)

localhost: 3000 /? a = 5 & b=10 &op=add
localhost: 3000 /? a = 17 & b=9 &op=subtract
localhost: 3000 /? a = 11 & b=8 &op=multiply
localhost: 3000 /? a = 6 & b=3 &op=divide