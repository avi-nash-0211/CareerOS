import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddCareer() {

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

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            await axios.post(
                "http://localhost:5000/api/careers",
                formData
            );

            alert("Career Added Successfully");

            navigate("/admin");

        } catch (error) {
            console.log(error);
        }
    };

    return (

        <div className="max-w-3xl mx-auto p-8">

            <h1 className="text-4xl font-bold mb-8">
                Add Career
            </h1>

            <form
                onSubmit={handleSubmit}
                className="space-y-4"
            >

                <input
                    name="title"
                    placeholder="Title"
                    className="border p-3 w-full rounded"
                    onChange={handleChange}
                />

                <input
                    name="organization"
                    placeholder="Organization"
                    className="border p-3 w-full rounded"
                    onChange={handleChange}
                />

                <input
                    name="qualification"
                    placeholder="Qualification"
                    className="border p-3 w-full rounded"
                    onChange={handleChange}
                />

                <input
                    name="stream"
                    placeholder="Stream"
                    className="border p-3 w-full rounded"
                    onChange={handleChange}
                />

                <input
                    name="category"
                    placeholder="Category"
                    className="border p-3 w-full rounded"
                    onChange={handleChange}
                />

                <textarea
                    name="description"
                    placeholder="Description"
                    className="border p-3 w-full rounded"
                    onChange={handleChange}
                />

                <input
                    name="applyLink"
                    placeholder="Apply Link"
                    className="border p-3 w-full rounded"
                    onChange={handleChange}
                />

                <button
                    className="bg-blue-600 text-white px-6 py-3 rounded"
                >
                    Add Career
                </button>

            </form>

        </div>

    );
}

export default AddCareer;