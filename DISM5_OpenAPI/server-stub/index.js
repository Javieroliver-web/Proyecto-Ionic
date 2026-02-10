const express = require('express');
const app = express();
const port = 3000;

app.get('/saludo', (req, res) => {
    res.json({
        mensaje: '¡Hola desde la API de DISM!'
    });
});

app.listen(port, () => {
    console.log(`Servidor de ejemplo escuchando en http://localhost:${port}`);
});
