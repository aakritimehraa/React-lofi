import React from 'react';
import './Styles.scss';
import ds from '../../assets/videos/Day-sunny.mp4';
import nr from '../../assets/videos/Night-rainny.mp4';
import dr from '../../assets/videos/Day-rainny.mp4';
import nc from '../../assets/videos/Night-clear.mp4';
import Rain from '../../components/Rain/Index';
import BtnsBoard from '../../components/BtnsBoard/Index';
import { useSelector } from 'react-redux';
import Footer from '../../components/footer/Index';

function Home() {
  const mode = useSelector((state) => state.toggle.mode);
  const rainMode = useSelector((state) => state.rain.status);

  const combineMode = `${mode}-${rainMode}`;

  return (
    <div className={`home ${combineMode}`}>
     <video
        className={combineMode === "night-norain" ? "videoIn" : "videoOut"}
        autoPlay
        loop
        muted
      >
        <source src={nc} type='video/mp4' />
      </video>
      <video
        className={combineMode === "night-rain" ? "videoIn" : "videoOut"}
        autoPlay
        loop
        muted
      >
        <source src={nr} type='video/mp4' />
      </video>
      {/* Day */}
      <video
        className={combineMode === "day-norain" ? "videoIn" : "videoOut"}
        autoPlay
        loop
        muted
      >
        <source src={ds} type='video/mp4' />
      </video>
      <video
        className={combineMode === "day-rain" ? "videoIn" : "videoOut"}
        autoPlay
        loop
        muted
      >
        <source src={dr} type='video/mp4' />
      </video>

      <Rain />
      <BtnsBoard />
      <Footer />
    </div>
  );
}

export default Home;
