const express = require("express");
const router = express.Router();
const { postUrl, getUrl } = require("../controllers/urlController");

//URL shortener endpoint
router.get("/:code", getUrl);
router.post("/shorten", postUrl);

module.exports = router;
