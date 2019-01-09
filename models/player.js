const mongoose = require('mongoose'); 

const playerSchema = new mongoose.Schema({
    firstName: {type: String,
                required: true},
    lastName: {type: String,
               required: true}, 
    dateOfBirth: {type: String,
                 required: true}, 
    image: String,
    countryOfBirth: String,
    position: String,
    gender: {type: String,
             enum: ['Male', 'Female']}
})

module.exports = mongoose.model("Player", playerSchema)