function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#0f172a] text-white">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-600 rounded-full blur-3xl"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 flex flex-col items-center justify-center gap-3">
        
        {/* NAME */}
        <h2 className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
          AHAD SALIM ABDALLA
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-300 text-sm md:text-base font-medium">
          Bachelor Degree in Data Science
        </p>

        {/* DIVIDER */}
        <div className="w-24 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>

        {/* COPYRIGHT */}
        <p className="text-gray-400 text-sm mt-2">
          © 2026 All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;