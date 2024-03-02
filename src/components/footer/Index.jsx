import React, { useState } from 'react';
import './Style.scss';
import { chill, jazz, sleep } from '../../data/songs';
import Player from '../player/Index';
import { useSelector } from 'react-redux';

function Footer() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const moodMode = useSelector((state) => state.mood.moodMode);

  return (
    <div className='footer'>
      <h2>Song Name : {getSongName(moodMode, currentSongIndex)}</h2>
      <h2>Made by <a target='_blank'  rel="noreferrer" href='https://www.linkedin.com/in/aakriti-mehra-7687021b7/' >Aakriti Mehra </a></h2>
      {moodMode === 'chill' ? (
        <Player
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
          songs={chill}
        />
      ) : moodMode === 'jazz' ? (
        <Player
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
          songs={jazz}
        />
      ) : (
        <Player
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
          songs={sleep}
        />
      )}
    </div>
  );
}

function getSongName(moodMode, currentSongIndex) {
  if (moodMode === 'chill') {
    return chill[currentSongIndex]?.name || '';
  } else if (moodMode === 'jazz') {
    return jazz[currentSongIndex]?.name || '';
  } else if (moodMode === 'sleep') {
    return sleep[currentSongIndex]?.name || '';
  }
  return '';
}

export default Footer;
