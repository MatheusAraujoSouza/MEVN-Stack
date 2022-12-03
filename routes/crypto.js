var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Crypto = require('../models/crypto');


router.post('/', async function(req, res, next) {
    try{
      const newCrypto = new Crypto({
        cryptoName: req.body.cryptoName,
        cryptoid: req.body.cryptoid,
        amount: req.body.amount,
        userId: req.body.userId,
      })
      await newCrypto.save()
      return res.status(201).json("new currency has been successfully added")
    }
    catch(error){
      console.log(error)
      return res.status(500).json({
        msg: "new currency has been successfully added",
        error
      })
    }
  
  });


  module.exports = router;