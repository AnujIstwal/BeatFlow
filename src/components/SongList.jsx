import React, { useEffect, useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { useCurrentSong } from "../context/context";
import { waveform } from "ldrs";
waveform.register();

export default function SongList({ category }) {
  const {
    setCurrentIndex,
    currentSong,
    setIsPlaying,
    isPlaying,
    songs,
    isPlaylistActive,
    setIsPlaylistActive,
    resetToTrending,
  } = useCurrentSong();
  const [filteredSongs, setFilteredSongs] = useState(songs);

  useEffect(() => {
    const handleSelectPlaylist = async () => {
      if (category === "favourites") {
        setFilteredSongs(songs.filter((song) => song.liked));
      } else if (category === "popular") {
        setFilteredSongs(songs.filter((songs) => songs.views > 1000000));
      } else if (category === "trending") {
        setFilteredSongs(songs);
      } else {
        const response = await fetch("/assets/playlists.json");
        const playlistData = await response.json();
        const selectedPlaylist = playlistData.playlists.find(
          (p) => p.name === category,
        );

        if (selectedPlaylist) {
          setFilteredSongs(
            songs.filter((song) => selectedPlaylist.songs.includes(song.id)),
          );
        }
      }
    };
    handleSelectPlaylist();
  }, [category, songs]);

  const handleSongClick = (id) => {
    setCurrentIndex(id - 1);
    setIsPlaying(true);
  };

  const handleBackClick = () => {
    setIsPlaylistActive(false);
    resetToTrending();
  };

  return (
    <div className="flex h-full w-full flex-col md:pl-4">
      <div className="flex w-full justify-between pr-6">
        <h1 className="pb-4 text-xl font-normal text-gray-200 capitalize">
          {isPlaylistActive ? "Playlist" : category} songs
        </h1>
        <button
          type="button"
          onClick={handleBackClick}
          className={`h-8 cursor-pointer rounded-lg bg-[#4B4B4B] px-4 text-sm text-gray-300 ${isPlaylistActive ? "block" : "hidden"}`}
        >
          Back
        </button>
      </div>

      <div className="h-[350px] overflow-y-auto focus:outline-0">
        {/* Songlist */}
        {filteredSongs?.map((song, index) => (
          <div
            key={song.id}
            className={`my-6 flex w-full items-center justify-between rounded-xl px-2 py-1 ${currentSong?.id === song.id ? "border border-neutral-500 bg-neutral-700/50" : ""} cursor-pointer`}
            onClick={() =>
              handleSongClick(isPlaylistActive ? index + 1 : song.id)
            }
          >
            <div className="flex items-center space-x-6">
              <h1 className="text-xl text-gray-300">
                {index > 8 ? index + 1 : `0${index + 1}`}
              </h1>
              <div className="relative h-14 w-14">
                <img
                  src={song.cover}
                  alt={song.title}
                  className="z-10 h-14 w-14 rounded-lg"
                />

                {currentSong?.id === song.id && isPlaying && (
                  <div className="bg-opacity-50 absolute inset-0 flex items-center justify-center bg-black/30">
                    <l-waveform
                      size="22"
                      stroke="3.5"
                      speed="1.2"
                      color="white"
                    ></l-waveform>
                  </div>
                )}
              </div>

              <div className="flex w-full flex-1 flex-col gap-y-1 md:min-w-[180px]">
                <h2 className="flex-1 text-[1rem] font-light text-gray-200">
                  {song.title}
                </h2>
                <p className="text-sm text-gray-500">{song.artist}</p>
              </div>

              <span className="hidden text-[0.92rem] text-[#cacaca] md:block">
                {song.duration}
              </span>
              <span className="hidden min-w-[100px] text-center text-sm text-zinc-400 md:block">
                {song.views}
              </span>
              {song.liked ? (
                <span className="hidden text-2xl text-red-400 md:block">
                  <GoHeartFill />
                </span>
              ) : (
                <span className="hidden text-2xl text-gray-400 md:block">
                  <GoHeart />
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
