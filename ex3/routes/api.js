var express = require('express');
var router = express.Router();
const Teams = require('../controllers/teams');
var jwt = require('jsonwebtoken')

router.get('/token', function(req,res){
  var sub = "Exame"
  var data = "dataDoSistema"
  const token = jwt.sign({sub,data}, "DAW-PRI-2020-recurso",{
      expiresIn: 3600 // expires in 1h
    });
    return res.status(200).json({ token: token });
  }
)

router.get('/teams', (req, res) => {
    Teams.list()
    .then(lista => res.status(200).jsonp(lista))
    .catch(error => res.status(500).jsonp({ error }));
  });


router.get('/teams/:id', (req, res) => {
    Teams.listTeam(req.params.id)
    .then(team => res.status(200).jsonp(team))
    .catch(error => res.status(500).jsonp({ error }));
  });


  router.delete('/teams/:id', (req,res) => {
    Teams.remove(req.params.id)
      .then(data => {
        console.log(data)
        if(data.n == 0)
          res.status(200).json({message: false})
        else
        res.status(200).json({message: true})
      })
      .catch(e => res.status(404).jsonp({message: false}))
  })

  router.post('/teams', (req, res) => {
    Compra.insert(req.body)
      .then(data => res.status(200).json({message: data._id}))
      .catch(e => res.status(404).jsonp({error: e})) 
  });


  router.delete('/teams/:id/members/:idMember ', (req,res) => {
    console.log(req.params.idMember)
    console.log(req.params.id)
    Compra.removeMember(req.params.id,req.params.idMember)
      .then(data => {
        console.log(data)
        if(data.nModified == 0)
          res.status(200).json({message: false})
        else
        res.status(200).json({message: true})
      })
      .catch(e => res.status(404).jsonp({message: e}))
  })


  module.exports = router;
