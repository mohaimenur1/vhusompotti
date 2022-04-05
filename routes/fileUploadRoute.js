const express = require("express");
const multer = require("multer");
const router = express.Router();

const fileUploadModel = require("../models/fileUploadModel");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./frontend/public/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/fileupload", upload.single("image"), async (req, res) => {
  //upload.single("propimage"),
  const { ownerName, bivag, zilla, mouza, amount, map } = req.body;
  // const { image } = req.file.originalname;
  const fileuploads = new fileUploadModel({
    ownerName,
    bivag,
    zilla,
    mouza,
    amount,
    map,
    image: req.file.originalname,
    // propimage,
  });
  try {
    const fileuploadResult = await fileuploads.save();
    res.send("File upload Successfully");
    console.log(req.file);
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

router.get("/:fileid", async (req, res) => {
  // console.log(req.body);
  try {
    const data = await fileUploadModel.findById(req.body.fileid);
    return res.send(data);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

module.exports = router;
