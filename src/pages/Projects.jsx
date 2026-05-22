function Projects() {
  return (
    <div className="min-h-screen bg-gray-100 px-10 py-20">

      <h1 className="text-5xl font-bold text-center text-purple-700 mb-16">
        My Projects
      </h1>

      <div className="grid md:grid-cols-2 gap-10">

        {/* PROJECT 1 */}
        <div className="bg-white rounded-3xl p-10 shadow-2xl hover:scale-105 transition">

          <h2 className="text-3xl font-bold text-purple-700 mb-5">
            Hotel Booking Management System
          </h2>

          <p className="text-gray-700 leading-8">
            A modern management system developed to simplify hotel
            booking operations, customer reservations, room management,
            and payment tracking. The system improves operational
            efficiency and enhances customer experience.
          </p>

        </div>

        {/* PROJECT 2 */}
        <div className="bg-white rounded-3xl p-10 shadow-2xl hover:scale-105 transition">

          <h2 className="text-3xl font-bold text-cyan-700 mb-5">
            Product Recommendation System
          </h2>

          <p className="text-gray-700 leading-8">
            A recommendation system for digital marketplaces that
            analyzes customer behavior and product preferences to
            suggest relevant products and improve user engagement.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Projects;