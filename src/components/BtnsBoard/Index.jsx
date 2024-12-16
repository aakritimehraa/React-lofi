import React, { useState, useEffect, useRef } from 'react';
import './Style.scss';
import { FaSlidersH } from "react-icons/fa";
import { RiTodoLine } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { changeMoodStatus } from '../../reducers/moodSlice';
import { changeFireVolume, changeRiverVolume, changeTrafficVolume, changeVolume } from '../../reducers/changeVolumeSlice';
import MoodBoard from './MoodBoard';
import trafficSound from '../../assets/audios/traffic.mp3';
import riverSound from '../../assets/audios/river.mp3';
import fireSound from '../../assets/audios/fire.mp3';
import TodoBoard from './TodoBoard';

function BtnsBoard() {
  const dispatch = useDispatch();
  const volumeValue = useSelector((state) => state.changeVolume.volumeValue);
  const traffic = useSelector((state) => state.changeVolume.trafficVolume);
  const fire = useSelector((state) => state.changeVolume.fireVolume);
  const river = useSelector((state) => state.changeVolume.riverVolume);
  const mood = useSelector((state) => state.mood.moodMode);

  const [openMood, setOpenMood] = useState(false);
  const [openTodo, setOpenTodo] = useState(false);

  const trafficAudioRef = useRef(null);
  const fireAudioRef = useRef(null);
  const riverAudioRef = useRef(null);

  useEffect(() => {
    if (trafficAudioRef.current) {
      trafficAudioRef.current.volume = traffic / 100;
    }
    if (fireAudioRef.current) {
      fireAudioRef.current.volume = fire / 100;
    }
    if (riverAudioRef.current) {
      riverAudioRef.current.volume = river / 100;
    }
  }, []);

  useEffect(() => {
    if (trafficAudioRef.current) {
      trafficAudioRef.current.volume = traffic / 100;
    }
    if (fireAudioRef.current) {
      fireAudioRef.current.volume = fire / 100;
    }
    if (riverAudioRef.current) {
      riverAudioRef.current.volume = river / 100;
    }
  }, [traffic, fire, river]);

  const openMoodHandler = () => {
    setOpenMood(!openMood);
    setOpenTodo(false);
  };

  const openTodoHandler = () => {
    setOpenTodo(!openTodo);
    setOpenMood(false);
  };

  const changeMoodHandler = (e) => {
    dispatch(changeMoodStatus(e.target.id));
  };

  const changeVolumeHandler = (e) => {
    dispatch(changeVolume(e.target.value));
  };

  const changeNoiseVolumeHandler = (noise, value) => {
    switch (noise) {
      case "river":
        dispatch(changeRiverVolume(value));
        break;
      case "fire":
        dispatch(changeFireVolume(value));
        break;
      case "traffic":
        dispatch(changeTrafficVolume(value));
        break;
      default:
        break;
    }
  };

  return (
    <div className="btns_board_wrapper">
      <audio ref={trafficAudioRef} src={trafficSound} loop autoPlay />
      <audio ref={fireAudioRef} src={fireSound} loop autoPlay />
      <audio ref={riverAudioRef} src={riverSound} loop autoPlay />

      <div className="btns_board">
        <div className="btn_slider">
          <FaSlidersH onClick={openMoodHandler} color="#fff" fontSize="24px" />
        </div>
        <div className="btn_todo">
          <RiTodoLine onClick={openTodoHandler} color="#fff" fontSize="24px" />
        </div>

        {openMood && (
          <MoodBoard
            changeMoodHandler={changeMoodHandler}
            changeVolumeHandler={changeVolumeHandler}
            changeNoiseVolumeHandler={changeNoiseVolumeHandler}
            volumeValue={volumeValue}
            mood={mood}
            traffic={traffic}
            fire={fire}
            river={river}
          />
        )}

        {openTodo && <TodoBoard handleOpen={openTodoHandler} />}
      </div>
    </div>
  );
}

export default BtnsBoard;
