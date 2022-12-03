var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const Users = require('../models/users');

/* Post user*/
router.post('/', async function(req, res, next) {
  try{
    const newUser = new Users({
      username: req.body.username,
      password: bcrypt.hashSync(req.body.password, 10),
      accessLevel: req.body.accessLevel
    })
    await newUser.save()
    return res.status(201).json("New user sucessfully created!")
  }
  catch(error){
    console.log(error)
    return res.status(500).json({
      msg: "New user cannot be created ....",
      error
    })
  }

});

module.exports = router;
