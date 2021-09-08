const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
  accountName: {
    type: String,
    required: true,
  },
  cardNumber: {
    type: Number,
    required: true,
  },
  expirationDate: {
    type: Date,
    require: true
  },
  bankBrand: {
    type: String,
  },
  cardType: {
    type: String
  },
  country: {
    type: String
  },
  cvv: {
    type: Number,
    require: true
  },
  
});

module.exports = Card = mongoose.model('card', cardSchema);