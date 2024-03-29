const express = require('express')
const app = express()
const port = 6942
const path = require('path')

app.use('/static', express.static(path.join(__dirname, 'public'))) // idk wtf this does
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/gjfahjfh.html')) // real
})

app.listen(port, () => {
    console.log(`you should go to localhost:${port} right NOW`)
})