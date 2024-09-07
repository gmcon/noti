const express = require('express');
const fs = require('fs');  // Para leer archivos
const app = express();
const port = process.env.PORT || 3000;

// Ruta principal para mostrar la notificación
app.get('/', (req, res) => {
    fs.readFile('notificacion.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo notificacion.json:', err);
            return res.status(500).send('Error al leer la notificación.');
        }
        
        const notificacion = JSON.parse(data).notificacion;
        res.send(`<h1>Notificación actual: ${notificacion}</h1>`);
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
