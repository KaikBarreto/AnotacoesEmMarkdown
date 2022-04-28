const axios = require('axios')
const express = require('express')
const app = express()

app.listen('3000')


app.route('/').get((req, res) => {

    axios.get("https://api.github.com/users/kaikbarreto")
        .then(result => res.send(`<img src="${result.data.avatar_url}"/>`))
        .catch(error => console.log(error))

})