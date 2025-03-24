import { createContext, useContext } from "react";

export const CurrentSongContext = createContext();

export const useCurrentSong = () => {
  return useContext(CurrentSongContext);
};
