//Constantes
const express = require('express');
const morgan = require('morgan');
const app = express();

//Se requiere el archivo Database para conexion
const { mongoose } = require('./database');
//Settings . configuraciones
app.set('port', process.env.PORT || 3000);
//Middlewares, 
app.use(morgan('dev'));
app.use(express.json());
//Routers . rutas

app.use('/api/notification',require('./routers/notificacion.routes'));

app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
})