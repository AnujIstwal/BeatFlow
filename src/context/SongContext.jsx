import React, { useState } from "react";
import { CurrentSongContext } from "./context";

export const SongProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState({});
  return (
    <CurrentSongContext.Provider value={{ currentSong, setCurrentSong }}>
      {children}
    </CurrentSongContext.Provider>
  );
};
