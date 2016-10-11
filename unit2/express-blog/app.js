// import express-blog
var express = require('express')

// insuniate the express server
var app = express()
var port = 4000
// console.log(express)
// set the required routes
var routes = require('./routes/index')

var user_routes = require('./routes/users')

var post_routes = require('./routes/posts')

// set the middlewares for routes
app.use('/', routes)
app.use('/users', user_routes)
app.use('/posts', post_routes)

//
// listening to the opened port

app.listen(port)
console.log( 'Server running at http://localhost:' + port + '/')
