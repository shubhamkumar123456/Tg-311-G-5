import React, { useState } from "react";
import {
  Home,
  Search,
  LogIn,
  UserPlus,
  Menu,
  X,
  Bell,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [allusers, setallusers] = useState([]);
  const [menuOpen, setmenuOpen] = useState(false);

  async function handleInputChanger(e) {
    let name = e.target.value;

    if (!name.trim()) {
      setallusers([]);
      return;
    }

    let res = await fetch(
      `https://socialmediag5.onrender.com/users/searchFriends?name=${name}`
    );

    let data = await res.json();

    setallusers(data.users);
  }

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-black border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* LOGO */}
        <Link
          to="/"
          className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
        >
          SocialHub
        </Link>

        {/* SEARCH BAR */}
        <div className="hidden md:block relative w-[350px]">
          <div className="flex items-center bg-white/10 border border-white/10 rounded-full px-4 py-2 backdrop-blur-md">
            <Search className="text-gray-300" size={18} />

            <input
              onChange={handleInputChanger}
              type="text"
              placeholder="Search friends..."
              className="bg-transparent outline-none text-white placeholder:text-gray-300 px-3 w-full"
            />
          </div>

          {/* SEARCH USERS */}
          {allusers.length > 0 && (
            <div className="absolute top-full mt-2 w-full bg-[#1e293b] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              {allusers.map((ele) => {
                return (
                  <div
                    key={ele._id}
                    className="flex items-center gap-3 p-3 hover:bg-white/10 transition duration-200 cursor-pointer"
                  >
                    <img
                      className="h-11 w-11 rounded-full object-cover border-2 border-pink-500"
                      src={ele.profilePic}
                      alt=""
                    />

                    <div>
                      <p className="text-white font-medium">{ele.name}</p>
                      <p className="text-sm text-gray-400">
                        View Profile
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-6 text-white">
          <li>
            <Link
              to="/"
              className="flex items-center gap-2 hover:text-pink-400 transition"
            >
              <Home size={20} />
              Home
            </Link>
          </li>

          <li className="cursor-pointer hover:text-pink-400 transition">
            <Bell size={21} />
          </li>

          <li className="cursor-pointer hover:text-pink-400 transition">
            <MessageCircle size={21} />
          </li>

          <li>
            <Link
              to="/login"
              className="flex items-center gap-2 hover:text-cyan-400 transition"
            >
              <LogIn size={20} />
              Login
            </Link>
          </li>

          <li>
            <Link
              to="/register"
              className="bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 rounded-full flex items-center gap-2 hover:scale-105 transition"
            >
              <UserPlus size={18} />
              Signup
            </Link>
          </li>
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setmenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 bg-[#0f172a] border-t border-white/10">

          {/* MOBILE SEARCH */}
          <div className="relative mt-4">
            <div className="flex items-center bg-white/10 border border-white/10 rounded-full px-4 py-2">
              <Search className="text-gray-300" size={18} />

              <input
                onChange={handleInputChanger}
                type="text"
                placeholder="Search friends..."
                className="bg-transparent outline-none text-white placeholder:text-gray-300 px-3 w-full"
              />
            </div>

            {allusers.length > 0 && (
              <div className="mt-2 bg-[#1e293b] rounded-2xl overflow-hidden border border-white/10">
                {allusers.map((ele) => {
                  return (
                    <div
                      key={ele._id}
                      className="flex items-center gap-3 p-3 hover:bg-white/10"
                    >
                      <img
                        className="h-10 w-10 rounded-full object-cover"
                        src={ele.profilePic}
                        alt=""
                      />

                      <p className="text-white">{ele.name}</p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* MOBILE LINKS */}
          <ul className="flex flex-col gap-4 mt-5 text-white">
            <li>
              <Link
                to="/"
                className="flex items-center gap-3 hover:text-pink-400"
              >
                <Home size={20} />
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/login"
                className="flex items-center gap-3 hover:text-cyan-400"
              >
                <LogIn size={20} />
                Login
              </Link>
            </li>

            <li>
              <Link
                to="/register"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 py-3 rounded-xl"
              >
                <UserPlus size={20} />
                Signup
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;