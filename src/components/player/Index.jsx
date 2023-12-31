import React, { useState, useRef, useEffect } from "react";
import "./Style.scss";
import PrevIcon from '../../assets/svg/prev.svg'
import PlayIcon from "../../assets/svg/play.svg";
import PauseIcon from "../../assets/svg/pause.svg";
import NextIcon from "../../assets/svg/next.svg";
import { useSelector } from "react-redux";

const Player = ({ currentSongIndex, setCurrentSongIndex, songs }) => {
  const audioElement = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const volumeValue = useSelector((state) => state.changeVolume.volumeValue)

  useEffect(() => {
    if (isPlaying) {
      audioElement.current.play();
      console.log(songs)
    } else {
      audioElement.current.pause();
    }
    audioElement.current.volume = volumeValue / 100;

  });

  const SkipSong = (forwards = true) => {
    setCurrentSongIndex(() => {
      let temp = currentSongIndex;
      forwards ? (temp += 1) : (temp -= 1);

      if (temp > songs.length - 1) {
        temp = 0;
      } else if (temp < 0) {
        temp = songs.length - 1;
      }

      return temp;
    });
  };

  return (
    <div className="music-player">
      <audio loop src={songs[currentSongIndex].src} ref={audioElement}></audio>
      <div className="music-player-controls">
        <button className="skip-btn" onClick={() => SkipSong(false)}>
          <img src={PrevIcon} alt="" />
        </button>
        <button className="play-btn" onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? (
            <img src={PauseIcon} alt="" />
          ) : (
            <img src={PlayIcon} alt="" />
          )}
        </button>
        <button className="skip-btn" onClick={() => SkipSong()}>
          <img src={NextIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Player;
