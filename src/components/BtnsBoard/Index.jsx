import React, { useState } from 'react'
import './Style.scss'
import { FaSlidersH, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { RiTodoLine } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { changeMoodStatus } from '../../reducers/moodSlice';
import { changeVolume } from '../../reducers/changeVolumeSlice';
import ReactAudioPlayer from 'react-audio-player';
import trafficSound from '../../assets/audios/traffic.mp3'
import riverSound from '../../assets/audios/river.mp3'
import fireSound from '../../assets/audios/fire.mp3'

function BtnsBoard() {
  
  const [traffic , setTraffic] = useState(0)
  const [fire , setFire] = useState(0)
  const [river , setRiver] = useState(0)


  const [openMood, setOpenMood] = useState(false)
  const [openTodo, setOpenTodo] = useState(false)
  const dispatch = useDispatch()
  const volumeValue = useSelector((state) => state.changeVolume.volumeValue)
  const mood = useSelector((state) => state.mood.moodMode)

  const openMoodHandler = () => {
    setOpenMood(!openMood)
    setOpenTodo(false)
  }

  const openTodoHandler = () => {
    setOpenTodo(!openTodo)
    setOpenMood(false)
  }

  const changeMoodHandler = (e) => {
    dispatch(changeMoodStatus(e.target.id))
    console.log(e.target.id)
  }


  const changeVolumeHandler = (e) => {
    dispatch(changeVolume(e.target.value));
  };


  return (
    <div className='btns_board_wrapper'>
      <div className='btns_board'>

        <div className='btn_slider'>
          <FaSlidersH onClick={openMoodHandler} color='#fff' fontSize={'24px'} />
        </div>

        <div className='btn_todo'>
          <RiTodoLine onClick={openTodoHandler} color='#fff' fontSize={'24px'} />
        </div>

        {openMood &&
          <MoodBoard changeMoodHandler={changeMoodHandler} changeVolumeHandler={changeVolumeHandler} volumeValue={volumeValue} mood={mood} traffic={traffic} setTraffic={setTraffic} fire={fire} setFire={setFire} river={river} setRiver={setRiver} />
        }

        {openTodo &&
          <TodoBoard handleOpen={openTodoHandler} />
        }
      </div>
    </div>
  )
}

export default BtnsBoard


const MoodBoard = ({ changeMoodHandler, changeVolumeHandler, volumeValue , mood , traffic , setTraffic ,fire, setFire , river , setRiver}) => {


  const dispatch = useDispatch()
  const muteHandler = () => {
    dispatch(changeVolume(0));
  };

  const volumeUpHandler = () => {
    dispatch(changeVolume(100));
  };

  return (
    <div className='board'>
      <h2 className='board_title'>Mood</h2>
      <div className='moods_wrapper'>
        <div id='chill' onClick={changeMoodHandler} className={`mood_type ${mood === 'chill' ? 'active' : ''}`}>
          Chill
        </div>
        <div id='jazz' onClick={changeMoodHandler} className={`mood_type ${mood === 'jazz' ? 'active' : ''}`}>
          Jazz
        </div>
        <div id='sleep' onClick={changeMoodHandler} className={`mood_type ${mood === 'sleep' ? 'active' : ''}`}>
          Sleep
        </div>

      </div>
      <div className='volume_slider'>
        <FaVolumeMute className='icon' color='#fff' fontSize={'24px'}  onClick={muteHandler} />
        <input type='range' min='0' max='100' value={volumeValue} onChange={changeVolumeHandler} />
        <FaVolumeUp className='icon' color='#fff' fontSize={'24px'}  onClick={volumeUpHandler} />

      </div>    
      
      <div className='noise_wrapper'>
      <h3 className='board_title'>Background Noises</h3>
      <div className='noise_type_wrapper'>
        <div className='noise_type'>
          <p>City Traffic</p>
          <ReactAudioPlayer
                    preload='auto'
                    autoPlay
                    src={trafficSound}
                    loop
                    volume={traffic / 100}
                  />
          <input type='range' value={traffic}
          onChange={(e) => setTraffic(e.target.value)}
          />
        </div>

        <div className='noise_type'>
          <p>Fire</p>
          <ReactAudioPlayer
                    preload='auto'
                    autoPlay
                    src={fireSound}
                    loop
                    volume={fire / 100}
                  />
          <input type='range' value={fire}
          onChange={(e) => setFire(e.target.value)}
          />        </div>

        <div className='noise_type'>
          <p>River</p>
          <ReactAudioPlayer
                    preload='auto'
                    autoPlay
                    src={riverSound}
                    loop
                    volume={river / 100}
                  />
          <input type='range' value={river}
          onChange={(e) => setRiver(e.target.value)}
          />        </div>
      </div> </div>
      </div>
  )
}

const TodoBoard = ({ handleOpen }) => {
  return (
    <div className='board'>
      <h2 className='board_title'>Todo</h2>

      <p style={{color:'#ffffff' , display:'flex' , justifyContent:'center'}}>Coming soon!</p>
    </div>
  )
}