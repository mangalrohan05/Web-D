const { checkPrimeSync } = require('crypto')
const express = require('express')
const app = express()
const port = 3000

const fs = require("fs")

app.use(express.static("public"))

app.use((req, res, next) =>{
    // console.log('Logged')
    console.log(req.headers);

    req.rohan = "This is my edit";

    fs.appendFileSync('logs.txt', `${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`)
    // res.send("Hacked by middleware 1")
    next()
})

app.use((req, res, next) =>{
    console.log('M2')
    next()
})

app.get('/', (req, res) => {
  res.send('Hello World!' + req.rohan)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
