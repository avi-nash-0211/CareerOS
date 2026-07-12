import { useEffect, useState } from "react";
import { getAllCareers } from "../services/careerService";
import CareerCard from "../components/CareerCard";

function Careers() {
  const [careers, setCareers] = useState([]);

  useEffect(() => {
    fetchCareers();
  }, []);

  const fetchCareers = async () => {
    try {
      const data = await getAllCareers();
      setCareers(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-8">
        Career Opportunities
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {careers.map((career) => (
          <CareerCard
            key={career.id}
            career={career}
          />
        ))}

      </div>

    </div>
  );
}

export default Careers;