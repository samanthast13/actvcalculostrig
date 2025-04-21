const express = require('express');
const cors = require('cors');
const db = require('./fakeDB');

const app = express();
const port = 3001;

app.use(cors());

// Área de un triángulo
app.get('/area-triangulo', (req, res) => {
  const { base, altura } = db.triangulo;
  const area = (base * altura) / 2;
  res.json({ figura: 'triángulo', base, altura, area });
});

// Área de un círculo
app.get('/area-circulo', (req, res) => {
  const { radio } = db.circulo;
  const area = Math.PI * Math.pow(radio, 2);
  res.json({ figura: 'círculo', radio, area: area.toFixed(2) });
});

// Área de un rectángulo
app.get('/area-rectangulo', (req, res) => {
  const { base, altura } = db.rectangulo;
  const area = base * altura;
  res.json({ figura: 'rectángulo', base, altura, area });
});

app.listen(port, () => {
  console.log('Servidor corriendo en http://localhost/:' + port);
  });