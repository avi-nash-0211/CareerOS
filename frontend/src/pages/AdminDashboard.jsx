import { useEffect, useState } from "react";
import CareerCard from "../components/CareerCard";

import {
  getAllCareers,
  deleteCareer,
} from "../services/careerService";

function AdminDashboard() {

  const [careers, setCareers] = useState([]);

  useEffect(() => {
    loadCareers();
  }, []);

  const loadCareers = async () => {
    const data = await getAllCareers();
    setCareers(data);
  };

  const handleDelete = async (id) => {

    await deleteCareer(id);

    loadCareers();

  };

  return (
    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-8">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {careers.map((career) => (

          <CareerCard
            key={career.id}
            career={career}
            showDelete={true}
            onDelete={handleDelete}
          />

        ))}

      </div>

    </div>
  );
}

export default AdminDashboard;