const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para procesar JSON
app.use(express.json());

// Ruta para recibir la notificación
app.post('/actualizar-notificacion', (req, res) => {
    const { notificacion } = req.body;
    if (notificacion) {
        // Aquí procesas la notificación. Puedes almacenarla, mostrarla o lo que necesites hacer con ella.
        console.log(`Nueva notificación: ${notificacion}`);
        res.json({ mensaje: 'Notificación actualizada correctamente.' });
    } else {
        res.status(400).json({ mensaje: 'No se proporcionó una notificación.' });
    }
});

// Ruta principal
app.get('/', (req, res) => {
    res.send('¡Servidor funcionando correctamente!');
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
