const mongoose = require('mongoose');

//URL Conexión
const URI = 'mongodb://localhost/mean-notificacion';
//Conexión con MONGODB
mongoose.connect(URI)
.then(db => console.log('Base de datos CONECTADA'))
.catch(err => console.error(err));