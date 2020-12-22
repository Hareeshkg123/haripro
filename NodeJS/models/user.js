const mongoose = require('mongoose');

var User = mongoose.model('User',{
    name: { type: String },
    place: { type: String },
    age: { type: Number },
    email: { type: String }
});

module.exports = { User };

