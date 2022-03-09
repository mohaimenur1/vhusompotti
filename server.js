/** @format */

const express = require('express');

const app = express();

//import the db file for running our database or check the db is connected or not
const dbConfig = require('./db');

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server run successfully on port ${port}`);
});
