import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LayoutDashboard, User, LogOut, Menu } from "lucide-react";

export default function SidebarDashboard() {
  const [items, setItems] = useState([]);
  const [openSidebar, setOpenSidebar] = useState(false);
  const navigate = useNavigate();

  // Fetch API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div
      className="min-h-screen flex "
      style={{
        background: "linear-gradient(135deg, #90CAF9, #CE93D8, #F8BBD0)",
      }}
    >
      {/* MOBILE TOP NAV */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-purple-700  text-white flex items-center justify-between px-4 py-3 z-50">
        <h1 className="text-xl font-bold"> User Dashboard</h1>

        <button onClick={() => setOpenSidebar(!openSidebar)}>
          <Menu size={28} />
        </button>
      </div>

      {/* SIDEBAR */}
      <aside
        className={`
    bg-gray-800 text-white flex flex-col p-6 fixed left-0 
    w-60 h-full z-40 transform transition-transform duration-300
    ${openSidebar ? "translate-x-0" : "-translate-x-full"}
    lg:translate-x-0
  `}
      >
        <h1 className="text-2xl font-bold text-center mb-6 ">User Dashboard</h1>

        <div className="h-px w-full bg-white/30 mb-4"></div>

        <nav className="flex flex-col space-y-4 text-lg font-semibold">
          <Link
            to="/Dashboard"
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-purple-700 transition"
          >
            <LayoutDashboard size={20} /> Dashboard
          </Link>

          <Link
            to="/Profile"
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-purple-700 transition"
          >
            <User size={20} /> Profile
          </Link>

          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-red-500 transition text-left"
          >
            <LogOut size={20} /> Logout
          </button>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 mt-16 lg:mt-0 lg:ml-60 p-6 overflow-y-auto max-h-screen">
        <h2 className="text-3xl font-bold mb-4 text-purple-900">Dashboard</h2>

        <p className="text-gray-600 mb-6">Here are the latest items.</p>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white p-5 rounded-xl shadow-lg border-l-4 border-purple-700 hover:shadow-2xl transition hover:-translate-y-1"
            >
              <h3 className="text-lg font-semibold mb-2 text-purple-700">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.body}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
