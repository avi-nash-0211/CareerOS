import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCareerById } from "../services/careerService";

function CareerDetails() {
  const { id } = useParams();

  const [career, setCareer] = useState(null);

  useEffect(() => {
    fetchCareer();
  }, []);

  const fetchCareer = async () => {
    try {
      const data = await getCareerById(id);
      setCareer(data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!career) {
    return <h2 className="text-center mt-10">Loading...</h2>;
  }

  return (
    <div className="max-w-4xl mx-auto p-8">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        {career.title}
      </h1>

      <div className="space-y-4">

        <p><strong>Organization:</strong> {career.organization}</p>

        <p><strong>Qualification:</strong> {career.qualification}</p>

        <p><strong>Stream:</strong> {career.stream}</p>

        <p><strong>Category:</strong> {career.category}</p>

        <p><strong>Description:</strong> {career.description}</p>

        <a
          href={career.applyLink}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded"
        >
          Apply Now
        </a>

      </div>

    </div>
  );
}

export default CareerDetails;