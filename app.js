var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var models  = require('./models');
var api = express.Router();
var v1 = express.Router(); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Esso App API');
});

v1.route('/users')

  .post(function(req, res) {
    models.User.create({
      username: Math.random()//req.body.username
    }).then(function() {
      res.json({ message: '201'});
    });
  })

  .get(function(req, res) {
    models.User.findAll({
      // include: [ models.Task ]
    }).then(function(users) {
      res.send(users);
    });
  });

api.use('/v1', v1)
app.use('/api', api);

module.exports = app;
