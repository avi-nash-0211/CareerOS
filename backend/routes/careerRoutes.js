const express = require("express");

const router = express.Router();

const {
    getAllCareers,
    getCareerById,
    addCareer,
    updateCareer,
    deleteCareer

} = require("../controllers/careerController");

router.get("/", getAllCareers);

router.get("/:id", getCareerById);
router.post("/", addCareer);
router.put("/:id", updateCareer);
router.delete("/:id", deleteCareer);

module.exports = router;