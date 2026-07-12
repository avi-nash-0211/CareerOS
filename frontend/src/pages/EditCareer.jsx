import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditCareer() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        organization: "",
        qualification: "",
        stream: "",
        category: "",
        description: "",
        applyLink: ""
    });

    useEffect(() => {
        loadCareer();
    }, []);

    const loadCareer = async () => {

        const response = await axios.get(
            `http://localhost:5000/api/careers/${id}`
        );

        setFormData(response.data);

    };

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        await axios.put(
            `http://localhost:5000/api/careers/${id}`,
            formData
        );

        alert("Career Updated Successfully");

        navigate("/admin");

    };

    return (

        <div className="max-w-3xl mx-auto p-8">

            <h1 className="text-4xl font-bold mb-8">
                Edit Career
            </h1>

            <form
                onSubmit={handleSubmit}
                className="space-y-4"
            >

                <input
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="border p-3 rounded w-full"
                />

                <input
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="border p-3 rounded w-full"
                />

                <input
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                    className="border p-3 rounded w-full"
                />

                <input
                    name="stream"
                    value={formData.stream}
                    onChange={handleChange}
                    className="border p-3 rounded w-full"
                />

                <input
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="border p-3 rounded w-full"
                />

                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="border p-3 rounded w-full"
                />

                <input
                    name="applyLink"
                    value={formData.applyLink}
                    onChange={handleChange}
                    className="border p-3 rounded w-full"
                />

                <button
                    className="bg-blue-600 text-white px-6 py-3 rounded"
                >
                    Update Career
                </button>

            </form>

        </div>

    );

}

export default EditCareer;