/** @format */

const express = require('express');
const router = express.Router();

//importing the registration model
const userModel = require('../models/userModel');

router.post('/signup', async (req, res) => {
  const { name, email, password, cpassword } = req.body;
  const registerUser = new userModel({
    name,
    email,
    password,
    cpassword,
  });
  try {
    const newRegisterUser = await registerUser.save();
    res.send('User registered Successfully');
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.post('/login', async (req, res) => {
  try {
    const loginUser = await userModel.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (loginUser) {
      res.send(loginUser);
    } else {
      res.send('Login Faild');
    }
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = router;
