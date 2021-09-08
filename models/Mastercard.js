const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mastercardSchema = new Schema({
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

module.exports = Mastercard = mongoose.model('mastercard', mastercardSchema);