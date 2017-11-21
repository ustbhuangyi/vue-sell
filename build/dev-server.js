require('./check-versions')()
var config = require('../config')
var path = require('path')
var express = require('express')
var opn = require('opn')

// default port where dev server listens for incoming traffic
var port = '8088'

var app = express()

var appData = require('../data.json')
var seller = appData.seller
var goods = appData.goods
var ratings = appData.ratings

var apiRoutes = express.Router()

apiRoutes.get('/seller', function (req, res) {
  res.json({
    errno: 0,
    data: seller
  });
})

apiRoutes.get('/goods', function (req, res) {
  res.json({
    errno: 0,
    data: goods
  })
})

apiRoutes.get('/ratings', function (req, res) {
  res.json({
    errno: 0,
    data: ratings
  });
})

app.use('/api', apiRoutes)

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

var uri = 'http://0.0.0.0:' + port

module.exports = app.listen(port, function (err) {
  console.log('> Listening at ' + uri + '\n')
  if (err) {
    console.log(err)
    return
  }

  // when env is testing, don't need open it
  // if (process.env.NODE_ENV !== 'testing') {
  //   opn(uri)
  // }
})
