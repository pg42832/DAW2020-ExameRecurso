const mongoose = require('mongoose')

var memberSchema = new mongoose.Schema({
      id: String,
      name: String,
      course: String,
      score: { type : Array , "default" : [] }
    })
    
var teamSchema = new mongoose.Schema({
    _id: String,
    guid: String,
    team: String,
    pitch1: { type : Boolean , "default" : false },
    pitch2: { type : Boolean , "default" : false },
    techPitch: { type : Boolean , "default" : false },
    businessReport: { type : Boolean , "default" : false },
    techReport: { type : Boolean , "default" : false },
    members: memberSchema
})
    
module.exports = mongoose.model('team', teamSchema)