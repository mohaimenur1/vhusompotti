/** @format */

const mongoose = require('mongoose');

var dbURLlocal = 'mongodb://localhost:27017/vhusompotti';

var dbURL =
  'mongodb+srv://rahman:0PAbBgHVP3OjW86E@cluster0.vmt2k.mongodb.net/vhusompotti';

mongoose.connect(dbURL, { useUnifiedTopology: true }).then((con) => {
  console.log('DB Connection Successful!');
});

module.exports = mongoose;
