//Crear rutas del servidor
const express = require('express');
const router = express.Router();

//peticion get al servidor, enviar una respuesta donde envie un mensaje a la patalla
router.get('/',(req, res) => {
    res.json({
        status: 'Api Works'
    }
    );
})
module.exports = router;