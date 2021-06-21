const express = require("express");
const multer = require("multer");
const router = express.Router();
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "client/public");
    },
    filename: (req, file, cb) => {
        cb(
            null,
            `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
        );
    },
});

const checkFileType = (file, cb) => {
    const filetypes = /jpg|jpeg|png/;
    const extname = filetypes.test(
        path.extname(file.originalname).toLowerCase()
    );
    const mimetype = filetypes.test(file.mimetype);
    if (extname && mimetype) {
        return cb(null, true);
    } else {
        return cb("Images only!");
    }
};

const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        checkFileType(file, cb);
    },
});

router.post("/", upload.single("image"), async (req, res) => {
    try {
        res.send(`${req.file.filename}`);
    } catch (error) {
        res.send({ msg: "Can get image ", error });
    }
});

module.exports = router;
