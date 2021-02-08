var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/', function(req, res, next) {
  axios.get('http://localhost:7777/api/teams?token=' + req.cookies.token)
    .then(dados => res.render('index', {title: "Recurso DAW",dados: dados.data}))
    .catch(e => res.render('error', {error: e}));
});

router.get('/teams/:id', function(req, res, next) {
  axios.get('http://localhost:7777/api/teams/' + req.params.id + '?token=' + req.cookies.token)
    .then(dados => res.render('team', {title: "Recurso DAW",dados: dados.data}))
    .catch(e => res.render('error', {error: e}));
});

module.exports = router;
