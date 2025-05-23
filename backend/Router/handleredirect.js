const express = require("express");
const redirectController = require("../controller/redirect.controller")
const router = express.Router();

router.get("/",redirectController);

module.exports = router ;