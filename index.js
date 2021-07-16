const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')

// Routes 
const mainPageRoutes = require('./Routes/mainPage')
const searchPageRouters = require('./Routes/search')

//PUG

app.set("view engine", "pug");


//Usage 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + "/public"));

app.use(mainPageRoutes)
app.use(searchPageRouters)

//Server Settings
const PORT = process.env.PORT || 3000
const server = app.listen(PORT, (error) => {
    if (error) {
    return console.log(`Error: ${error}`)
    } else {
    console.log(`Server listening on port ${server.address().port}`)}
});