import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import {
  FaHeart,
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaStepBackward,
  FaStepForward,
} from "react-icons/fa";
import "./Player.css";

import { useCurrentSong } from "../context/context";

const Player = () => {
  const { currentSong } = useCurrentSong();
  return (
    <div className="player-container flex items-center rounded-lg border border-gray-600 px-6 py-1 shadow-lg">
      {/* Album Art */}
      <img
        src="musicLogo.png"
        alt="Album Art"
        className="mr-4 h-16 w-16 rounded-md"
      />

      {/* Song Info */}
      <div className="mr-4 flex flex-col gap-2">
        <h3 className="font-semibold text-gray-100">{currentSong?.title}</h3>
        <p className="text-sm text-gray-400">{currentSong?.artist}</p>
      </div>

      {/* Heart Icon */}
      <FaHeart className="mr-4 cursor-pointer text-rose-500" size={24} />

      {/* Audio Player */}
      <div className="flex-1">
        <AudioPlayer
          src={currentSong?.src}
          showSkipControls
          showJumpControls={false}
          customIcons={{
            play: <FaPlay size={30} color="#CBCBCB" />,
            pause: <FaPause size={30} color="#CBCBCB" />,
            previous: <FaStepBackward size={25} color="#CBCBCB" />,
            next: <FaStepForward size={25} color="#CBCBCB" />,
            volume: <FaVolumeUp color="#CBCBCB" />,
          }}
          className="custom-audio-player"
        />
      </div>
    </div>
  );
};

export default Player;
