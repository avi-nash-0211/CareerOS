const express = require("express");

const router = express.Router();

const {
    getAllCareers,
    getCareerById,
    addCareer

} = require("../controllers/careerController");

router.get("/", getAllCareers);

router.get("/:id", getCareerById);
router.post("/", addCareer);

module.exports = router;