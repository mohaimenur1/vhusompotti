/** @format */

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const dbConfig = require('./db');
//declare express middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// const landingPageRoute = require('./routes/landingPageRoute');
const userRoute = require('./routes/userRoute');

//router middleware
// app.use('/', landingPageRoute);
app.use('/api/users/', userRoute);

//import the db file for running our database or check the db is connected or not

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server run successfully on port ${port}`);
});
