const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({data: "bolo de morango"})
})


app.listen(5000, () => {
  console.log("listen on 5000")
})
