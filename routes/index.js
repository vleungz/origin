var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { page: 'index' });
});

router.get('/home', function(req, res, next) {
  res.render('home', { page: 'home' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { page: 'about' });
});

router.get('/menu', function(req, res, next) {
  res.render('menu', { page: 'menu' });
});

module.exports = router;
