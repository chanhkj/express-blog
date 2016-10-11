var express = require('express')
var router = express.Router()

// setting the route to homepage
//  app.get('/path-name', callback(request, response))
router.get('/', function(req, res) {
  res.send('hello world, this is the user homepage')
})
router.get('/contact', function(req, res) {
  res.send('Contact user 999')
})
router.get('/about', function(req, res) {
  res.send('WDI user')
})

module.exports = router
