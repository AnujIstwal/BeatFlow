import React, { useEffect, useRef } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { FaPause, FaPlay } from "react-icons/fa6";
import {
  FaVolumeUp,
  FaStepBackward,
  FaStepForward,
  FaVolumeMute,
} from "react-icons/fa";
import "./Player.css";

import { useCurrentSong } from "../context/context";
import { GoHeart, GoHeartFill } from "react-icons/go";

const Player = () => {
  const {
    currentSong,
    isPlaying,
    setIsPlaying,
    playNext,
    playPrevious,
    songs,
  } = useCurrentSong();

  console.log(songs);
  const audioRef = useRef(null);
  // Automatically play the next song when the current one ends
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.audio.current.onended = () => {
        playNext();
        setIsPlaying(true);
      };
    }
  }, [currentSong, playNext, setIsPlaying]);

  return (
    <div className="player-container mx-auto flex w-full items-center rounded-lg border border-gray-600 px-6 py-1 shadow-lg">
      <div className="hidden w-[32%] max-w-[340px] items-center gap-4 md:flex">
        {/* Album Art */}
        <img
          src={currentSong?.cover}
          alt={currentSong?.album}
          className="mr-4 h-16 w-16 rounded-md"
        />

        {/* Song Info */}
        <div className="mr-4 flex flex-col gap-2">
          <h3 className="font-semibold text-gray-100">{currentSong?.title}</h3>
          <p className="text-sm text-gray-400">{currentSong?.artist}</p>
        </div>

        {/* Heart Icon */}
        {currentSong?.liked ? (
          <GoHeartFill
            className="mr-4 cursor-pointer text-rose-500"
            size={30}
          />
        ) : (
          <GoHeart className="mr-4 cursor-pointer text-gray-300" size={30} />
        )}
      </div>

      {/* Audio Player */}
      <div className="flex-1">
        <AudioPlayer
          ref={audioRef}
          src={currentSong?.src}
          autoPlayAfterSrcChange={isPlaying}
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
          showSkipControls
          showJumpControls={false}
          customIcons={{
            play: (
              <FaPlay
                size={50}
                color="#CBCBCB"
                className="rounded-full border border-gray-500 bg-gray-500/20 p-3"
              />
            ),
            pause: (
              <FaPause
                size={50}
                color="#CBCBCB"
                className="rounded-full border border-gray-500 bg-gray-800/20 p-3"
              />
            ),
            previous: (
              <FaStepBackward
                size={25}
                color="#CBCBCB"
                onClick={playPrevious}
              />
            ),
            next: (
              <FaStepForward size={25} color="#CBCBCB" onClick={playNext} />
            ),
            volume: <FaVolumeUp color="#CBCBCB" />,
            volumeMute: <FaVolumeMute color="#CBCBCB" />,
          }}
          className="custom-audio-player"
        />
      </div>
    </div>
  );
};

export default Player;
