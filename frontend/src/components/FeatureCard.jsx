function FeatureCard({ title, description }) {
  return (
    <div className="border rounded-lg p-6 shadow">

      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="text-gray-600 mt-2">
        {description}
      </p>

    </div>
  );
}

export default FeatureCard;