// car schema with model, make, reg no, and owner
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let carSchema = new Schema({
  model: {
    type: Number
  },
  make: {
    type: String
  },
  reg: {
    type: String
  },
  owner: {
    type: String
  }
}, {
    collection: 'cars'
  })

module.exports = mongoose.model('car', carSchema)