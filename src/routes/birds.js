var express = require('express');
var router = express.Router();
var formController = require('../controllers/formController');

/* GET home page. */
router.get('/create', function (req, res, next) {
  res.render('birds/create', { title: 'Create new Bird' });
});

router.post('/create', function (req, res, next) {
  formController.form_post(req, res);
});

module.exports = router;
