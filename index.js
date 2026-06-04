const express = require('express');
const path = require('path');

const app = express();
// Puerto
const PORT = 4242;

// Configuración de EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
 
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.use('/base', baseRouter);

app.get('/', (req, res) => res.redirect('/base'));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
