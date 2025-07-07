const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    let siteName = 'owner'
    let searchText = 'Seach here'
    res.render('index', {siteName: siteName, searchText: searchText});
})

app.get('/site/:slug', (req, res) => {
    let title = 'BRAND starts here'
    let content = `Own what you don't`
    res.render('views/site.ejs', {title: title, content: content});
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
