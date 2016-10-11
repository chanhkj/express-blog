var express = require('express')
var router = express.Router()

// setting the route to homepage
//  app.get('/path-name', callback(request, response))
router.get('/', function(req, res) {
  res.send('hello world, this is the user homepage')
})
router.get('/:id', function(req, res) {
  res.send('posts 1 id is ' + req.params.id)
})
router.get('/new', function(req, res) {
  res.send('new post')
})
router.get('/1/edit', function(req, res) {
  res.send('1 edit post')
})

module.exports = router
