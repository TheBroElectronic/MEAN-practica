const mongoose = require('mongoose');

const URI = 'mongodb://localhost/meanTest';

mongoose.connect(URI)
    .then(db => console.log('CONECTADO A D.B'))
    .catch(err => console.log(err));

module.exports = mongoose;