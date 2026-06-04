const express = require('express');
const path = require('path');
const baseRouter = require('./routes/base.routes');

const app = express();
const PORT = 4242;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/base', baseRouter);

app.get('/', (req, res) => res.redirect('/base'));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
