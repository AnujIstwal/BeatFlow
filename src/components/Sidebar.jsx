import React from "react";
import { FaHeart, FaChartLine, FaStar, FaPlus } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="flex h-full w-64 flex-col justify-between p-6">
      {/* Logo */}
      <div className="flex items-center justify-center">
        <img src="logo.png" alt="Logo" className="h-12 w-12" />
      </div>

      {/* Music Categories */}
      <div>
        <h3 className="mb-3 text-sm text-gray-500 uppercase">Your Music</h3>
        <ul className="space-y-3">
          <li className="flex cursor-pointer items-center gap-3 hover:text-pink-500">
            <FaHeart className="text-gray-500" />
            <span className="text-gray-200">Favourites</span>
          </li>
          <li className="flex cursor-pointer items-center gap-3 hover:text-blue-500">
            <FaChartLine className="text-gray-500" />
            <span className="text-gray-200">Trending</span>
          </li>
          <li className="flex cursor-pointer items-center gap-3 hover:text-yellow-500">
            <FaStar className="text-gray-500" />
            <span className="text-gray-200">Popular</span>
          </li>
        </ul>
      </div>

      {/* Playlist Section */}
      <div>
        <h3 className="mb-3 text-sm text-gray-500 uppercase">Your Playlists</h3>
        <ul className="space-y-3">
          <li className="flex cursor-pointer items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <span className="text-gray-200">Romantic</span>
          </li>
          <li className="flex cursor-pointer items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-purple-500"></div>
            <span className="text-gray-200">Dancing</span>
          </li>
          <li className="flex cursor-pointer items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
            <span className="text-gray-200">Soft</span>
          </li>
        </ul>
      </div>

      {/* Create New Playlist */}
      <div className="flex cursor-pointer items-center gap-3 text-orange-500">
        <span>Create new playlist</span>
        <FaPlus />
      </div>
    </div>
  );
};

export default Sidebar;
