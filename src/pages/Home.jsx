function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-r from-purple-100 to-cyan-100 relative overflow-hidden">
      
      {/* Decorative Blur Circles */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-300 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-300 opacity-30 rounded-full blur-3xl"></div>

      {/* Glass Card */}
      <div className="backdrop-blur-lg bg-white/40 border border-white/30 shadow-2xl rounded-3xl p-10 max-w-4xl z-10">
        
        {/* Small Intro Badge */}
        <span className="inline-block px-4 py-1 mb-6 text-sm font-semibold tracking-wide text-purple-700 bg-purple-200 rounded-full">
          Data Science Student
        </span>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight">
          Welcome To My
          <span className="text-purple-600"> Portfolio</span>
        </h1>

        {/* Description */}
        <p className="mt-8 text-lg md:text-xl text-gray-700 leading-9">
          I am <span className="font-semibold text-gray-900">AHMAD SALIM ABDALLA</span>, 
          a Third Year student at the Eastern Africa Statistical Training Center pursuing a
          Bachelor Degree in Data Science. Passionate about
          data analytics, software development, and cloud technologies.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 text-white px-10 py-4 rounded-2xl shadow-xl text-lg font-semibold hover:scale-105">
            Explore More
          </button>

          <button className="bg-white/70 hover:bg-white text-purple-700 border border-purple-300 transition-all duration-300 px-10 py-4 rounded-2xl shadow-lg text-lg font-semibold hover:scale-105">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
