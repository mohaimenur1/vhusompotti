const express = require("express");
const router = express.Router();

const fileUploadModel = require("../models/fileUploadModel");

router.post("/fileupload", async (req, res) => {
  const { ownerName, bivag, zilla, mouza, amount, map } = req.body;
  const fileuploads = new fileUploadModel({
    ownerName,
    bivag,
    zilla,
    mouza,
    amount,
    map,
  });
  try {
    const fileuploadResult = await fileuploads.save();
    res.send("File upload Successfully");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
