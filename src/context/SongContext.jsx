import React, { useEffect, useState } from "react";
import { CurrentSongContext } from "./context";

export const SongProvider = ({ children }) => {
  const [songs, setSongs] = useState([]);
  const [isPlaylistActive, setIsPlaylistActive] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    try {
      const fetchSongs = async () => {
        const timestamp = new Date().getTime(); // Cache-busting parameter
        const response = await fetch(`/assets/data.json?nocache=${timestamp}`);
        const { songs } = await response.json();
        console.log(songs);
        setSongs(songs);
      };
      fetchSongs();
    } catch (err) {
      console.error(err);
    }
  }, []);

  // Function to load the playlist.json file
  const loadPlaylist = async () => {
    try {
      const timestamp = new Date().getTime(); // Cache-busting parameter
      const response = await fetch(
        `/assets/playlistOfTheDay.json?nocache=${timestamp}`,
      ); // New JSON file
      const data = await response.json();
      setSongs(data.songs);
      setCurrentIndex(0);
    } catch (error) {
      console.error("Error loading playlist:", error);
    }
  };

  // Go back to Trending Songs
  const resetToTrending = async () => {
    try {
      const timestamp = new Date().getTime(); // Cache-busting parameter
      const response = await fetch(`/assets/data.json?nocache=${timestamp}`);
      const data = await response.json();
      setSongs(data.songs);
      setIsPlaylistActive(false);
      setCurrentIndex(0);
    } catch (error) {
      console.error("Error resetting to trending:", error);
    }
  };

  const playNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  // Previous Song
  const playPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? songs.length - 1 : prevIndex - 1,
    );
  };

  const currentSong = songs[currentIndex];

  return (
    <CurrentSongContext.Provider
      value={{
        isPlaying,
        setIsPlaying,
        currentSong,
        setCurrentIndex,
        songs,
        setSongs,
        playNext,
        playPrevious,
        loadPlaylist,
        isPlaylistActive,
        setIsPlaylistActive,
        resetToTrending,
      }}
    >
      {children}
    </CurrentSongContext.Provider>
  );
};
