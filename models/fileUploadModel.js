/** @format */

const mongoose = require("mongoose");

const fileUploadSchema = mongoose.Schema({
  ownerName: {
    type: String,
    required: true,
  },
  bivag: {
    type: String,
    required: true,
  },
  zilla: {
    type: String,
    required: true,
  },
  mouza: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  map: {
    type: String,
    required: true,
  },
  propimage: {
    type: String,
  },
});

const fileUploadModel = mongoose.model("fileuploads", fileUploadSchema);

module.exports = fileUploadModel;
