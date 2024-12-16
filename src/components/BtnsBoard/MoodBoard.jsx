import { useDispatch } from "react-redux";
import { changeVolume } from "../../reducers/changeVolumeSlice";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";


const MoodBoard = ({
    changeNoiseVolumeHandler,
    changeMoodHandler,
    changeVolumeHandler,
    volumeValue,
    mood,
    traffic,
    fire,
    river,
  }) => {
    const dispatch = useDispatch();
  
    const muteHandler = () => {
      dispatch(changeVolume(0));
    };
  
    const volumeUpHandler = () => {
      dispatch(changeVolume(100));
    };
  
    return (
      <div className="board">
        <h2 className="board_title">Mood</h2>
        <div className="moods_wrapper">
          <div
            id="chill"
            onClick={changeMoodHandler}
            className={`mood_type ${mood === "chill" ? "active" : ""}`}
          >
            Chill
          </div>
          <div
            id="jazz"
            onClick={changeMoodHandler}
            className={`mood_type ${mood === "jazz" ? "active" : ""}`}
          >
            Jazz
          </div>
          <div
            id="sleep"
            onClick={changeMoodHandler}
            className={`mood_type ${mood === "sleep" ? "active" : ""}`}
          >
            Sleep
          </div>
        </div>
  
        <div className="volume_slider">
          <FaVolumeMute
            className="icon"
            color="#fff"
            fontSize="24px"
            onClick={muteHandler}
          />
          <input
            type="range"
            min="0"
            max="100"
            value={volumeValue}
            onChange={changeVolumeHandler}
          />
          <FaVolumeUp
            className="icon"
            color="#fff"
            fontSize="24px"
            onClick={volumeUpHandler}
          />
        </div>
  
        <div className="noise_wrapper">
          <h3 className="board_title">Background Noises</h3>
          <div className="noise_type_wrapper">
            <div className="noise_type">
              <p>City Traffic</p>
              <input
                type="range"
                value={traffic}
                onChange={(e) => changeNoiseVolumeHandler("traffic", e.target.value)}
              />
            </div>
  
            <div className="noise_type">
              <p>Fire</p>
              <input
                type="range"
                value={fire}
                onChange={(e) => changeNoiseVolumeHandler("fire", e.target.value)}
              />
            </div>
  
            <div className="noise_type">
              <p>River</p>
              <input
                type="range"
                value={river}
                onChange={(e) => changeNoiseVolumeHandler("river", e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default MoodBoard;
  