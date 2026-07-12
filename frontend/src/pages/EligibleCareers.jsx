import { useState } from "react";
import CareerCard from "../components/CareerCard";
import { getEligibleCareers } from "../services/careerService";

function EligibleCareers() {

  const [qualification, setQualification] = useState("");

  const [careers, setCareers] = useState([]);

  const searchCareers = async () => {
    try {
      const data = await getEligibleCareers(qualification);
      setCareers(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-8">
        Find Eligible Careers
      </h1>

      <div className="flex gap-4 mb-10">

        <input
          type="text"
          placeholder="Enter Qualification"
          value={qualification}
          onChange={(e) => setQualification(e.target.value)}
          className="border p-3 rounded w-full"
        />

        <button
          onClick={searchCareers}
          className="bg-blue-600 text-white px-6 rounded"
        >
          Search
        </button>

      </div>

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

export default EligibleCareers;