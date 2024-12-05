const mongoose = require("mongoose")

const mongooseFileds = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true 
    }
})

module.exports = mongoose.model('cruddatas', mongooseFileds)  