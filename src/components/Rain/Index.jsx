import React from 'react';
import { FaCloudRain } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import './Style.scss';
import { setRain } from '../../reducers/rainSlice';
import ReactAudioPlayer from 'react-audio-player';
import rainSound from '../../assets/audios/rain.mp3'

function Rain() {
  const dispatch = useDispatch();
  const rainStatus = useSelector((state => state.rain.status));

  const handleButtonClick = () => {
    const newRainStatus = rainStatus === 'rain' ? 'norain' : 'rain';
    dispatch(setRain(newRainStatus));
  };

  console.log(rainStatus)
  
  return (
    <>
    <div className='rain_wrapper'>
      <button onClick={handleButtonClick}>
        <FaCloudRain />
      </button>
    </div>
    {rainStatus === 'rain' && (
        <ReactAudioPlayer
          src={rainSound} 
          autoPlay
          loop
          volume={0.5} 
        />
      )}
    </>
  );
}

export default Rain;
