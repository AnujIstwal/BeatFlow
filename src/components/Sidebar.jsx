import React from "react";
import { FaHeart, FaChartLine, FaStar, FaPlus } from "react-icons/fa";

const menuItems = [
  {
    id: "trending",
    label: "Trending",
    icon: (
      <FaChartLine className="text-xl text-gray-300 md:text-base md:text-gray-500" />
    ),
  },
  {
    id: "popular",
    label: "Popular",
    icon: (
      <FaStar className="text-xl text-gray-300 md:text-base md:text-gray-500" />
    ),
  },
  {
    id: "favourites",
    label: "Favourites",
    icon: (
      <FaHeart className="text-xl text-gray-300 md:text-base md:text-gray-500" />
    ),
  },
];

const Sidebar = ({ setCategory, category }) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-around gap-y-4 p-6 md:w-64 md:items-start md:gap-y-0">
      {/* Logo */}
      <div className="flex items-center justify-center md:ml-6">
        <img src="logo.png" alt="Logo" className="h-12 w-12" />
      </div>

      {/* Music Categories */}
      <div className="w-full">
        <h3 className="mb-3 text-sm text-gray-500 uppercase">Your Music</h3>
        <ul className="flex items-baseline justify-evenly space-y-3 gap-x-4 text-[.92rem] md:ml-4 md:block">
          {menuItems.map((item) => (
            <li
              key={item.id}
              onClick={() => setCategory(item.id)}
              className={`flex cursor-pointer items-center gap-3 transition ${category === item.id ? "font-bold" : ""}`}
            >
              {item.icon}
              <span className="text-gray-300">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Playlist Section */}
      <div className="w-full">
        <h3 className="mb-3 text-sm text-gray-500 uppercase">Your Playlists</h3>
        <ul className="flex items-baseline justify-evenly space-y-3 gap-x-4 text-[.92rem] md:ml-4 md:block">
          <li
            onClick={() => setCategory("romantic")}
            className="flex cursor-pointer items-center gap-3"
          >
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <span className="text-gray-300">Romantic</span>
          </li>
          <li
            onClick={() => setCategory("english")}
            className="flex cursor-pointer items-center gap-3"
          >
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
            <span className="text-gray-300">English</span>
          </li>
        </ul>
      </div>

      {/* Create New Playlist
      <div className="hidden cursor-pointer items-center gap-3 text-orange-400 md:flex">
        <span>Create new playlist</span>
        <FaPlus />
      </div> */}
    </div>
  );
};

export default Sidebar;
