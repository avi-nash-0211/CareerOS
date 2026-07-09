const careers = [
    {
        id: 1,
        title: "Software Engineer",
        qualification: "B.Tech"
    },
    {
        id: 2,
        title: "MCA Graduate Trainee",
        qualification: "MCA"
    },
    {
        id: 3,
        title: "Data Analyst",
        qualification: "B.Sc Computer Science"
    }
];

const getAllCareers = (req, res) => {
    res.json(careers);
};

module.exports = {
    getAllCareers
};