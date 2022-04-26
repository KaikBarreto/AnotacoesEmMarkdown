const express = require('express')

const app = express()

app.listen('3000')

let author = "Kaik"

app.route('/').put( (req,res) => {
    author = req.body
})