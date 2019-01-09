var Player = require("../models/player") 
var express = require("express")
var Router = express.Router()


Router.get("/", function(req, res){
   
        Player.find({}, function(err, players){
            if (err){
                res.send("Error with loading the database")
            } else {
                res.send(players); 
            }
        })
    })
    
Router.get("/:id", function(req, res){
    Player.findById(req.params.id, function(err, player){
        if (err) {
            res.send("Player not found!!")
        } else {
            res.send(player)
        }
    })
})

Router.post("/", function(req, res){
    
    const player1 = {
        firstName: req.body.firstName, 
        lastName: req.body.lastName,
        dateOfBirth: req.body.dateOfBirth,
        image: req.body.imageUrl,
        countryOfBirth: req.body.countryOfBirth, 
        position: req.body.position,
        gender: (req.body.gender === 'Male') || (req.body.gender === 'Female') ? req.body.gender : "Other"
    }
    
    Player.create(player1, function(err, newPlayer){
        if (err){
            console.log(err)
            res.send(err)
        } else {
            res.render()
        }
    })
    
})

Router.put("/:id", function(req, res){
    
    const player1 = {
        firstName: req.body.firstName, 
        lastName: req.body.lastName,
        dateOfBirth: req.body.dateOfBirth,
        image: req.body.imageUrl,
        countryOfBirth: req.body.countryOfBirth, 
        position: req.body.position,
        gender: (req.body.gender === 'Male') || (req.body.gender === 'Female') ? req.body.gender : "Other"
    }
    
    Player.findByIdAndUpdate(req.params.id, player1, function(err, player){
        if (err) {
            res.send("Error")
        } else {
            res.send(player)
        }
    })
})

Router.delete("/:id", function(req,res){
    
     Player.findByIdAndRemove(req.params.id, function(err){
        
        if (err){
            
            res.send("Error")
            
        } else {
            
            res.send(req.params.id); 
        }
    })
})

module.exports = Router
