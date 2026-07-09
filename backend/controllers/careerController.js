const careers = require("../data/careers");

const getAllCareers = (req, res) => {
    res.json(careers);
};

module.exports = {
    getAllCareers
};