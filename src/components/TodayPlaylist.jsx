import React from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { useCurrentSong } from "../context/context";

export default function TodayPlaylist() {
  const {
    loadPlaylist,
    setIsPlaylistActive,
    isPlaylistActive,
    resetToTrending,
  } = useCurrentSong();

  const handlePlaylistClick = () => {
    setIsPlaylistActive((prev) => !prev);

    if (isPlaylistActive) {
      resetToTrending();
    } else {
      loadPlaylist();
    }
  };
  return (
    <div
      className={`relative flex h-full w-full flex-col gap-y-3 rounded-4xl border ${isPlaylistActive ? "border-gray-200" : "border-gray-700"} bg-[#1D1D1D]/50 px-6 py-4`}
    >
      <img
        src="todayPlaylist.png"
        alt="Album Art"
        className={`absolute top-0 left-0 z-0 h-full w-full rounded-4xl object-cover ${isPlaylistActive ? "opacity-25" : "opacity-100"} `}
      />

      <h1 className="z-10 text-xl font-normal text-gray-100">
        Playlist of the day
      </h1>

      <span
        onClick={handlePlaylistClick}
        className="z-10 mx-auto flex h-[4.5rem] w-[4.5rem] cursor-pointer items-center justify-center rounded-full bg-gray-200/60 transition-transform hover:scale-105"
      >
        {isPlaylistActive ? (
          <FaPause size={30} className="text-gray-100" />
        ) : (
          <FaPlay size={30} className="text-gray-800" />
        )}
      </span>
      <div className="z-10 flex justify-between text-sm text-gray-300">
        <span>Track: 4</span>
        <span>19 minuites</span>
      </div>
    </div>
  );
}
