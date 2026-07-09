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
const addCareer = (req, res) => {

    const newCareer = {
        id: careers.length + 1,
        ...req.body
    };

    careers.push(newCareer);

    res.status(201).json({
        message: "Career added successfully",
        career: newCareer
    });
};
const updateCareer = (req, res) => {

    const id = Number(req.params.id);

    const index = careers.findIndex(career => career.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Career not found"
        });
    }

    careers[index] = {
        ...careers[index],
        ...req.body
    };

    res.json({
        message: "Career updated successfully",
        career: careers[index]
    });

};

module.exports = {
    getAllCareers,
    getCareerById,
    addCareer,
    updateCareer

};


