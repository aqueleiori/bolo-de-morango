const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.get('/', (req, res) => {
  res.json({data: "bolo de morango"})
  res.setHeader('Content-Type', 'application/json');
})


app.listen(5000, () => {
  console.log("listen on 5000")
})
