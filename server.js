const express = require('express');
const fs = require('fs');  // Para leer archivos
const path = require('path');  // Para manejar rutas de archivos de manera más segura
const app = express();
const port = process.env.PORT || 3000;

// Middleware para servir archivos estáticos, si tienes CSS o JS
app.use(express.static('public'));

// Ruta principal para mostrar la notificación
app.get('/api/notificaciones', (req, res) => {
    const filePath = path.join(__dirname, 'notificacion.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo notificacion.json:', err);
            return res.status(500).json({ error: 'Error al leer la notificación.' });
        }

        try {
            const notificacion = JSON.parse(data).notificacion;
            res.json({ mensaje: notificacion });
        } catch (jsonErr) {
            console.error('Error al parsear el archivo JSON:', jsonErr);
            res.status(500).json({ error: 'Error al procesar la notificación.' });
        }
    });
});


// Ruta API para obtener la notificación en formato JSON (para tu main.js o frontend)
app.get('/api/notificaciones', (req, res) => {
    const filePath = path.join(__dirname, 'notificacion.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo notificacion.json:', err);
            return res.status(500).json({ error: 'Error al leer la notificación.' });
        }

        try {
            const notificacion = JSON.parse(data).notificacion;
            res.json({ mensaje: notificacion });
        } catch (jsonErr) {
            console.error('Error al parsear el archivo JSON:', jsonErr);
            res.status(500).json({ error: 'Error al procesar la notificación.' });
        }
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
