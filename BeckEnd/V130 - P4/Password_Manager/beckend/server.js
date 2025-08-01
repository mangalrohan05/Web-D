const express = require('express');
const app = express();
const port = 3000;

require('dotenv').config()

app.get('/', (req, res)=> {
    res.send('Hello')
})

app.listen(port, ()=>{
    console.log(`Running on port: http://localhost:${port}`)
})