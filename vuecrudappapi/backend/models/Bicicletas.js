const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BiciSchema = new Schema({
  referencia: {
    type: String
  },
  nombre: {
    type: String
  },
  color: {
    type: String
  },
  tamaño: {
    type: String
  },
  precio: {
    type: Number
  },
}, {
  collection: 'bicicletas'
})

module.exports = mongoose.model('bicicletas', BiciSchema)