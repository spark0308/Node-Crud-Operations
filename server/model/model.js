const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    note: {
        type: String,
        required: true
    },
    contact: {
        phone:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        }
    }
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;