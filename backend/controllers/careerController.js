const careers = require("../data/careers");

const getAllCareers = (req, res) => {
    res.json(careers);
};
const getCareerById = (req, res) => {

    const id = Number(req.params.id);

    const career = careers.find(career => career.id === id);

    if (!career) {
        return res.status(404).json({
            message: "Career not found"
        });
    }

    res.json(career);
};

module.exports = {
    getAllCareers,
    getCareerById
};


