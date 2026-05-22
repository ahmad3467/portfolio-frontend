import { Mail, Phone } from "lucide-react";

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 to-cyan-100 px-10 py-20">

      <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-4xl mx-auto">

        <h1 className="text-5xl font-bold text-purple-700 mb-10">
          Contact Me
        </h1>

        <p className="text-lg text-gray-700 leading-10 mb-10">
          I am open to communication, collaboration, internship
          opportunities, academic projects, and networking related
          to data science, analytics, and software development.
        </p>

        <div className="space-y-8">

          <div className="flex items-center gap-5">
            <Phone className="text-purple-600" size={35} />
            <span className="text-xl text-gray-700">
              +255 616 789 041
            </span>
          </div>

          <div className="flex items-center gap-5">
            <Phone className="text-cyan-600" size={35} />
            <span className="text-xl text-gray-700">
              +255 778 815 501
            </span>
          </div>

          <div className="flex items-center gap-5">
            <Mail className="text-red-500" size={35} />
            <span className="text-xl text-gray-700">
              ahmadsala255@gmail.com
            </span>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Contact;