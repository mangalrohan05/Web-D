const express = require('express')

const birds = require('./routes/birds')
const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/birds', birds)

app.get('/', (req, res) => {
  console.log("Get File")
  res.send('this is a get request')
})

app.post('/', (req, res) => {
  console.log("Post")
  res.send('Hello Post!')
})

app.get("/test", (req, res)=>{
  console.log("test file")
  res.sendFile('templates/index.html', {root: __dirname});
})

app.get("/api", (req, res)=>{
  console.log("test file 2")
  res.json({a:1, b:2, name: ["rohan", "saksham"]});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
