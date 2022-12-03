var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Users = require('../models/users');



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

router.post('/authenticate', async function(req, res, next) {
  try{
    const user = await Users.findOne({
      username: req.body.username
    })
    if(!user || !bcrypt.compareSync(req.body.password, user.password)){
      return res.status(400).json("Unable to authenticate the user with the entered data")
    }

    const token = jwt.sign({
      username:user.username
    },'SECRET@#$_11111_&¨%$%&&*&')
 
    return res.status(200).json({
      message:"User sucessfully authenticate",
      token,
      username:user.username
    })
  }
  catch(error){
    console.log(error)
    return res.status(500).json({
      msg: "User cannot be authenticated ....",
      error
    })
  }

});

module.exports = router;
