import React from "react";
import { User2, Briefcase, Mail, Phone, MapPin, Calendar } from "lucide-react";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import avatarImg from "../assets/Images/avatar.png";

export default function UserProfile() {
   const handleLogout = () => {
  localStorage.removeItem("isLoggedIn");
   alert("Logged out successfully!");
   window.location.href = "/";
};

  return (
    <div
      className="relative min-h-screen w-full flex justify-center items-start py-12 px-4"
      style={{
        background: "linear-gradient(135deg, #90CAF9, #CE93D8, #F8BBD0)",
      }}
    >
      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition"
      >
        Logout
      </button>

      {/* Profile Card */}
      <div className="w-full max-w-5xl bg-white/30 backdrop-blur-xl shadow-2xl rounded-2xl p-10 border border-white/40">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-purple-900 text-center mb-10 tracking-wide">
          Employee Profile Overview
        </h1>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Profile Card */}
          <div className="w-full md:w-1/3 bg-white rounded-2xl shadow-xl p-6 text-center border border-gray-100">
            <img
              src={avatarImg}
              alt="avatar"
              className="w-40 h-40 rounded-full bg-blue-300 border-4 border-purple-400 mx-auto shadow-md"
            />

            <h2 className="text-xl font-semibold mt-4 text-gray-800">
              Hina Landage
            </h2>

            <p className="text-gray-600 mt-1 flex items-center justify-center gap-2">
              <Briefcase size={16} /> Frontend Developer
            </p>

            {/* Job Summary */}
            <div className="text-left mt-6 space-y-2">
              <p className="text-gray-700">
                <strong>Employee ID:</strong> EMP202512
              </p>
              <p className="text-gray-700">
                <strong>Department:</strong> Web Development
              </p>
              <p className="text-gray-700">
                <strong>Experience:</strong> 1+ Year
              </p>
            </div>

            {/* Social Links Section */}
            <div className="mt-20 p-5 bg-white rounded-2xl shadow-md ">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Social Profiles
              </h3>

              <div className="flex items-center justify-center gap-6">
                <a
                  href="#"
                  className="text-blue-700 hover:scale-110 transition"
                >
                  <FaLinkedin size={30} />
                </a>
                <a
                  href="#"
                  className="text-gray-900 hover:scale-110 transition"
                >
                  <FaGithub size={30} />
                </a>
                <a
                  href="#"
                  className="text-blue-600 hover:scale-110 transition"
                >
                  <FaFacebook size={30} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Details Section */}
          <div className="w-full md:w-2/3 space-y-6">
            {/* Personal Information */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-purple-800 flex items-center gap-2 mb-4">
                <User2 size={20} /> Personal Information
              </h3>
              <table className="w-full text-gray-700">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Full Name</td>
                    <td className="py-2">Hina Landage</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Gender</td>
                    <td className="py-2">Female</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Date of Birth</td>
                    <td className="py-2">12 July 2002</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Location</td>
                    <td className="py-2 flex items-center gap-2">
                      <MapPin size={16} /> Mumbai, India
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Job Information */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-purple-800 flex items-center gap-2 mb-4">
                <Briefcase size={20} /> Job Information
              </h3>
              <table className="w-full text-gray-700">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Position</td>
                    <td className="py-2">Frontend Developer</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Department</td>
                    <td className="py-2">Development</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Joining Date</td>
                    <td className="py-2 flex items-center gap-2">
                      <Calendar size={16} /> 10 Jan 2025
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Work Mode</td>
                    <td className="py-2">Hybrid</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-purple-800 flex items-center gap-2 mb-4">
                <Mail size={20} /> Contact Information
              </h3>
              <table className="w-full text-gray-700">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Email</td>
                    <td className="py-2 flex items-center gap-2">
                      <Mail size={16} /> hina.dev@example.com
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Phone</td>
                    <td className="py-2 flex items-center gap-2">
                      <Phone size={16} /> +91 98765 43210
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
