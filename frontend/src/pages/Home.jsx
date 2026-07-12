import FeatureCard from "../components/FeatureCard";

function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      {/* Hero Section */}
        
      <div className="text-center">

        <h1 className="text-5xl font-bold text-blue-600">
          CareerOS
        </h1>

        <p className="text-gray-600 mt-6 text-xl">
          Find opportunities you're eligible for.
        </p>

        <div className="mt-8 flex justify-center gap-4">

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
            Explore Careers
          </button>

          <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg">
            Get Started
          </button>

        </div>

      </div>
        <div className="mt-20">

  <h2 className="text-3xl font-bold text-center">
    Why CareerOS?
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">

    <FeatureCard
    title="Qualification Based"
    description="Find careers based on your qualification."
/>

<FeatureCard
    title="50+ Opportunities"
    description="Explore careers across government and private sectors."
/>

<FeatureCard
    title="Admin Dashboard"
    description="Manage career opportunities easily."
/>
  </div>

</div>
    </div>
  );
}

export default Home;



<div className="mt-20">

  <h2 className="text-3xl font-bold text-center">
    Why CareerOS?
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">

    <div className="border rounded-lg p-6 shadow">

      <h3 className="text-xl font-semibold">
        Qualification Based
      </h3>

      <p className="text-gray-600 mt-2">
        Find careers based on your qualification.
      </p>

    </div>

    <div className="border rounded-lg p-6 shadow">

      <h3 className="text-xl font-semibold">
        50+ Opportunities
      </h3>

      <p className="text-gray-600 mt-2">
        Explore careers across government and private sectors.
      </p>

    </div>

    <div className="border rounded-lg p-6 shadow">

      <h3 className="text-xl font-semibold">
        Admin Dashboard
      </h3>

      <p className="text-gray-600 mt-2">
        Manage career opportunities easily.
      </p>

    </div>

  </div>

</div>