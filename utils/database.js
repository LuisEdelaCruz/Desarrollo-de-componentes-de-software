const base = [
  { id: 1, nombre: "Cabaña El Pino", tipo: "alojamiento", precio: 500 },
  { id: 2, nombre: "Guía Sierra Norte", tipo: "guia", precio: 300 },
  { id: 3, nombre: "Artesanías Ramírez", tipo: "artesano", precio: 150 },
  { id: 4, nombre: "Restaurante La Milpa", tipo: "restaurante", precio: 200 },
];

function getTodos() {
  return base;
}

function getPorId(id) {
  return base.find(s => s.id === parseInt(id));
}

module.exports = { getTodos, getPorId };
