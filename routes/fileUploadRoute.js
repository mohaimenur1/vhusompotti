const express = require("express");
const multer = require("multer");
const router = express.Router();

const fileUploadModel = require("../models/fileUploadModel");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./frontend/public/uploads/");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/fileupload", upload.single("propimage"), async (req, res) => {
  const { ownerName, bivag, zilla, mouza, amount, map } = req.body;
  const { propimage } = req.file.originalname;
  const fileuploads = new fileUploadModel({
    ownerName,
    bivag,
    zilla,
    mouza,
    amount,
    map,
    propimage,
  });
  try {
    const fileuploadResult = await fileuploads.save();
    res.send("File upload Successfully");
  } catch (error) {
    console.log(error);
  }
});

router.get("/getallfile", async (req, res) => {
  try {
    const fileResult = await fileUploadModel.find({});
    return res.send(fileResult);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
