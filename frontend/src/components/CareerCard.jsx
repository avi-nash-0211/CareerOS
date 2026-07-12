import { Link } from "react-router-dom";

function CareerCard({
  career,
  showDelete = false,
  onDelete,
}) {
  return (
    <div className="border rounded-lg shadow p-6 hover:shadow-lg transition">

      <h2 className="text-2xl font-bold text-blue-600">
        {career.title}
      </h2>

      <p className="mt-2">
        <strong>Organization:</strong> {career.organization}
      </p>

      <p>
        <strong>Qualification:</strong> {career.qualification}
      </p>

      <p>
        <strong>Category:</strong> {career.category}
      </p>

      <div className="flex gap-3 mt-5">

        <Link
          to={`/careers/${career.id}`}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          View Details
        </Link>

        {showDelete && (
          <button
            onClick={() => onDelete(career.id)}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Delete
          </button>
        )}

      </div>

    </div>
  );
}

export default CareerCard;