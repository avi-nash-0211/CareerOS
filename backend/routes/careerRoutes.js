const express = require("express");
const router = express.Router();

const { getAllCareers } = require("../controllers/careerController");

router.get("/", getAllCareers);

module.exports = router;