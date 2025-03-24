import React, { useState, useEffect } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { useCurrentSong } from "../context/context";

export default function SongList() {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setCurrentSong } = useCurrentSong();

  console.log(songs);

  useEffect(() => {
    try {
      const fetchSongs = async () => {
        const timestamp = new Date().getTime(); // Cache-busting parameter
        const response = await fetch(`/assets/data.json?nocache=${timestamp}`);
        const { songs } = await response.json();
        console.log(songs);
        setSongs(songs);
        setLoading(false);
      };
      fetchSongs();
    } catch (err) {
      console.error(err);
    }
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="flex h-full w-full flex-col px-4">
      <h1 className="pb-4 text-xl font-semibold text-gray-200">
        Trending Songs
      </h1>

      <div className="overflow-y-auto">
        {/* Songlist */}
        {songs?.map((song) => (
          <div
            key={song.id}
            className="my-6 flex w-full items-center justify-between"
            onClick={() => setCurrentSong(song)}
          >
            <div className="flex items-center space-x-6">
              <img
                src={song.cover}
                alt={song.title}
                className="h-14 w-14 rounded-lg"
              />
              <div className="flex min-w-[180px] flex-col gap-y-1">
                <h2 className="text-[1.05rem] font-light text-gray-200">
                  {song.title}
                </h2>
                <p className="text-sm text-gray-500">{song.artist}</p>
              </div>

              <span className="text-[#cacaca]">{song.duration}</span>
              <span className="min-w-[100px] text-center text-sm text-zinc-400">
                {song.views}
              </span>
              {song.liked ? (
                <span className="text-2xl text-red-400">
                  <GoHeartFill />
                </span>
              ) : (
                <span className="text-2xl text-gray-400">
                  <GoHeart />
                </span>
              )}
            </div>
            {/* <button
            onClick={() => setCurrentSong(song)}
            className="rounded-lg bg-[#1DB954] px-4 py-2 font-semibold text-white"
          >
            Play
          </button> */}
          </div>
        ))}
      </div>
    </div>
  );
}
