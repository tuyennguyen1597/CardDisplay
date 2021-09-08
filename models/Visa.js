const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const visaSchema = new Schema({
  iin_start: {
    type: Number,
  },
  scheme: {
    type: String,
  },
  type: {
    type: String,
  },
  country: {
    type: String,
  },
  bank_name: {
    type: String,
  },
});

module.exports = Visa = mongoose.model('visa', visaSchema);