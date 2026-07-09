const express = require("express");

const router = express.Router();

const {
    getAllCareers,
    getCareerById
} = require("../controllers/careerController");

router.get("/", getAllCareers);

router.get("/:id", getCareerById);

module.exports = router;