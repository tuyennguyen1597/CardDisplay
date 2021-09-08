const express = require('express');
const asyncHandler = require('express-async-handler')
const Card = require('../models/Card');
const Amex = require('../models/Amex');
const Visa = require('../models/Visa');
const Mastercard = require('../models/Mastercard');
const checkCard = require('../functions/checkCard');
const router = express.Router();

/*
 * @methof: POST /check-bin
 * @des: Identify Bank Brand
 */
router.post('/check-bin', asyncHandler(async (req, res) => {
  console.log('Hi from nodejs')
  try {
    const cardNum = parseInt(req.body.cardNumber);
    let card = {};

    if (isNaN(cardNum)) {
      res.status(400)
      throw new Error('Invalid Card Number')
    }
    console.log('Hi from nodejs 2')

    //Check bank type based on iin
    if (
      (cardNum >= 340000 && cardNum <= 349999) ||
      (cardNum >= 370000 && cardNum <= 379999)
    ) {
      card = await Amex.findOne({ iin_start: cardNum }).exec();
    } else if (cardNum >= 400000 && cardNum <= 499999) {
      card = await Visa.findOne({ iin_start: cardNum }).exec();
    } else if (
      (cardNum >= 222100 && cardNum <= 272099) ||
      (cardNum >= 510000 && cardNum <= 559999)
    ) {
      card = await Mastercard.findOne({ iin_start: cardNum }).exec();
    }

    //Asume that only the first 6 digits in DB is valid
    //Otherwise it is invalid
    if (!card) {
      res.status(400)
      throw new Error ('Invalid Card Number')
    }

    //Return the card info if it is valid
    return res.status(200).json(card);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
}));

// router.post('/create-card', async (req, res) => {
//   let { accountName, cardNumber, expirationMonth, expirationYear, cvv } =
//     req.body;
//   console.log(req.body);
//   const expirationDate = new Date(`${expirationYear}/${expirationMonth}/28`);
//   try {
//     let card = {};
//     const cardNumberDigits = parseInt(cardNumber.slice(0, 6));

//     console.log(cardNumberDigits);
//     //Card number check
//     if (
//       (cardNumberDigits >= 340000 && cardNumberDigits <= 349999) ||
//       (cardNumberDigits >= 370000 && cardNumberDigits <= 379999)
//     ) {
//       card = await Amex.findOne({ iin_start: cardNumberDigits }).exec();
//     } else if (cardNumberDigits >= 400000 && cardNumberDigits <= 499999) {
//       card = await Visa.findOne({ iin_start: cardNumberDigits }).exec();
//     } else if (
//       (cardNumberDigits >= 222100 && cardNumberDigits <= 272099) ||
//       (cardNumberDigits >= 510000 && cardNumberDigits <= 559999)
//     ) {
//       card = await Mastercard.findOne({ iin_start: cardNumberDigits }).exec();
//     }

//     console.log(expirationDate);

//     if (!card) {
//       return res.status(200).send('Invali card number');
//     }

//     //check CVV validation
//     //is a number
//     if (!Number.isInteger(parseInt(cvv))) {
//       return res.status(200).send('Invalid CVV code');
//     } else if (cvv.length !== 3) {
//       return res.status(200).send('Invalid CVV code');
//     }

//     const newCard = {
//       accountName,
//       cardNumber,
//       expirationDate,
//       cvv,
//       bankBrand: card['bank_name'],
//       cardType: card['type'],
//       country: card['country'],
//     };

//     console.log(newCard);
//     await Card.create(newCard);
//     return res.status(200).json(newCard);
//   } catch (error) {
//     console.error(error.message);
//     return res.status(500).send('Server Error');
//   }
// });

// router.post('/check-number', (req, res) => {
//   const { cardNumber } =  req.body
//   if (isNaN(parseInt(cardNumber))) {
//     return res.status(400).json({msg: "Please enter valid numbers 0-9"})
//   }

//   if (cardNumber.length > 16) {
//     return res.status(400).json({msg: 'Card number should less than 16 digits'})
//   }

//   return res.status(200).send(true)
// })

// router.post('/check-expiration', (req, res) => {
//   const { cardNumber } =  req.body
//   if (isNaN(parseInt(cardNumber))) {
//     return res.status(400).json({msg: "Please enter valid numbers 0-9"})
//   }

//   return res.status(200).send(true)
// })


module.exports = router;
