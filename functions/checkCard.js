const Amex = require('../models/Amex')
const Visa = require('../models/Visa')
const Mastercard = require('../models/Mastercard')

async function checkCard( cardNumber ) {
  let card = {}
  if (
    (cardNum >= 340000 && cardNum <= 349999) ||
    (cardNum >= 370000 && cardNum <= 379999)
  ) {
     card = await Amex.findOne({iin_start: cardNum}).exec();
  } else if ((cardNum >= 400000 && cardNum <= 499999)) {
    card = await Visa.findOne({iin_start: cardNum}).exec();
  } else if ((cardNum >= 222100 && cardNum <= 272099) ||
  (cardNum >= 510000 && cardNum <= 559999)) {
    card = await Mastercard.findOne({iin_start: cardNum}).exec();
  }
  return card
}
exports.checkCard = checkCard;
