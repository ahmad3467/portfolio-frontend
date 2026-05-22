import {
  Code,
  Database,
  FileSpreadsheet,
  BarChart3,
} from "lucide-react";

function Skills() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-50 to-purple-100 px-6 py-20 relative overflow-hidden">
      
      {/* Decorative Background Effects */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-300 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-300 opacity-20 rounded-full blur-3xl"></div>

      {/* Heading */}
      <div className="text-center relative z-10">
        <span className="inline-block px-4 py-1 mb-5 text-sm font-semibold tracking-wide text-purple-700 bg-purple-200 rounded-full">
          My Expertise
        </span>

        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-700 mb-4">
          Skills & Expertise
        </h1>

        <p className="max-w-2xl mx-auto text-gray-600 text-lg leading-8">
          A combination of technical, analytical, and development skills
          focused on creating innovative and data-driven solutions.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-3 gap-10 mt-16 relative z-10">
        
        {/* Frontend */}
        <div className="group backdrop-blur-lg bg-white/70 border border-white/40 p-10 rounded-3xl shadow-xl hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">
          <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-purple-100 mb-6 group-hover:scale-110 transition-transform duration-300">
            <Code size={34} className="text-purple-600" />
          </div>

          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Frontend Development
          </h2>

          <p className="text-gray-600 leading-8">
            Experienced in HTML, CSS, and JavaScript for creating
            modern, responsive, and attractive user interfaces.
          </p>
        </div>

        {/* Programming */}
        <div className="group backdrop-blur-lg bg-white/70 border border-white/40 p-10 rounded-3xl shadow-xl hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">
          <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-cyan-100 mb-6 group-hover:scale-110 transition-transform duration-300">
            <Database size={34} className="text-cyan-600" />
          </div>

          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Programming
          </h2>

          <p className="text-gray-600 leading-8">
            Skilled in Python and R programming for data analysis,
            automation, statistical computation, and machine learning.
          </p>
        </div>

        {/* Excel & Analytics */}
        <div className="group backdrop-blur-lg bg-white/70 border border-white/40 p-10 rounded-3xl shadow-xl hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">
          <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-green-100 mb-6 group-hover:scale-110 transition-transform duration-300">
            <FileSpreadsheet size={34} className="text-green-600" />
          </div>

          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Excel & Analytics
          </h2>

          <p className="text-gray-600 leading-8">
            Strong data analysis skills using Excel, data visualization,
            reporting, and business intelligence techniques.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Skills;