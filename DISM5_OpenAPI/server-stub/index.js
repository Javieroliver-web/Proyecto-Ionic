const express = require('express');
const app = express();
const port = 3000;
const DefaultController = require('./controllers/DefaultController');

app.use(express.json());

app.get('/saludo', (req, res) => {
    res.json({
        mensaje: '¡Hola desde la API de DISM!'
    });
});

// API Routes
app.get('/usuarios', DefaultController.getUsuarios);
app.post('/usuarios', DefaultController.addUsuario);
app.put('/usuarios/:id', DefaultController.updateUsuario);
app.delete('/usuarios/:id', DefaultController.deleteUsuario);

app.listen(port, () => {
    console.log(`Servidor de ejemplo escuchando en http://localhost:${port}`);
});
