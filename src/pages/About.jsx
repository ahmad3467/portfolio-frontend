function About() {
  return (
    <div className="min-h-screen px-6 py-20 bg-gray-100 relative overflow-hidden">
      
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-300 opacity-20 rounded-full blur-3xl"></div>

      {/* Main Card */}
      <div className="relative max-w-5xl mx-auto backdrop-blur-lg bg-white/70 border border-white/40 rounded-3xl shadow-2xl p-10 md:p-14">

        {/* Section Badge */}
        <span className="inline-block px-4 py-1 mb-6 text-sm font-semibold tracking-wide text-purple-700 bg-purple-200 rounded-full">
          About Me
        </span>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-700 mb-8 leading-tight">
          Personal Profile
        </h1>

        {/* Content */}
        <p className="text-lg md:text-xl text-gray-700 leading-10">
          I am a passionate and motivated{" "}
          <span className="font-semibold text-purple-700">
            Data Science student
          </span>{" "}
          with strong interests in programming, data analysis, cloud
          computing, and software development.

          <br /><br />

          Currently studying at the Eastern Africa Statistical
          Training Center, I continue improving my technical skills
          in modern technologies including{" "}
          <span className="font-semibold text-gray-900">
            Python, R, JavaScript, HTML, CSS, and Excel.
          </span>

          <br /><br />

          I enjoy solving real-world problems through technology and
          developing systems that improve efficiency, automation,
          and decision-making using data-driven approaches.
        </p>

        {/* Skills Section */}
        <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
          {[
            "Python",
            "R Programming",
            "JavaScript",
            "Cloud Computing",
            "Data Analytics",
            "Web Development",
          ].map((skill, index) => (
            <span
              key={index}
              className="px-5 py-2 bg-purple-100 text-purple-700 rounded-full font-medium shadow-md hover:scale-105 transition-transform duration-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;