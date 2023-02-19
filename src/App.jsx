import { motion } from "framer-motion";
import { useState } from "react";
import ReactPlayer from "react-player";
import videosJSON from './assets/data-video.json';
import AdditionSettings from "./components/additionalInfo";
import AudioControls from "./components/audioControl";
import Loading from "./components/loadingImage";
import PauseImage from "./components/pauseImage";
import RadioStations from "./components/radioStations";
import github from "./images/github.png";
import pauseImg from "./images/pause.png";
import play from "./images/play.svg";
import "./styles/audioControl.css";
import "./styles/index.css";
import { Link } from 'react-router-dom';
import URL_CONSTANT from './constant/url.constant';
const DEFAULT_INDEX = 7;

function App() {
  const [BtnClass, setBtnClass] = useState("PlayPause"); //pause play change
  const [BtnClass2, setBtnClass2] = useState("playBtn");
  const [playPauseImg, setPlayPause] = useState(play);
  const [livestream, playLiveStream] = useState(false);
  const [pauseScreen, setPauseScreen] = useState("pauseScreen");
  const [currentLivestream, setLivestream] = useState(videosJSON.at(DEFAULT_INDEX).urlLive);
  const [stationName, setStationName] = useState(videosJSON.at(DEFAULT_INDEX).displayName);
  const [youtubeChannel, setYoutubeChannal] = useState(videosJSON.at(DEFAULT_INDEX).urlChannel);
  const [video, setVideo] = useState(videosJSON.at(DEFAULT_INDEX).urlVideo);

  const handlePausePlaySwitch = (e) => {
    let className = e.target.className;
    switch(className){
      case "PlayPause" ||"playBtn":
        setPlayPause(pauseImg);
        setBtnClass("PlayPause2");
        setBtnClass2("playBtn2");
        start();
        break;
      case "PlayPause2" || "playBtn2":
        setPlayPause(play);
        setBtnClass("PlayPause");
        setBtnClass2("playBtn");
        pause();
        break;
      default: 
        return;
    }
  };

  const start = () => {
    playLiveStream(false);
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
  };
  const pause = () => {
    setPauseScreen("pauseScreen");
    playLiveStream(false);
  };

  const videos = videosJSON.map(item =>{
    return {
      action:() =>{
        {
          setVideo(URL_CONSTANT.EMBBED_URL.replace('{id}', item.urlVideo));
          setStationName(item.displayName);
          setYoutubeChannal(URL_CONSTANT.CHANNEL_URL.replace('{id}', item.urlChannel));
          setLivestream(URL_CONSTANT.LIVE_URL.replace('{id}', item.urlLive));
          playLiveStream(true);
          setPauseScreen("unpauseScreen");
          setPlayPause(pauseImg);
          setBtnClass("PlayPause2");
          setBtnClass2("playBtn2");
          return item.displayName;
        }
      },
      title: item.displayName
    }
  });
  return (
    <div className="interfaceContainer">
      <div className="radioContainer">
        <div className="logo">
          <Link to="/">
            StudyBeats
          </Link>
        </div>
        <div className="subHeading"></div>
        <div className="radioStationsContainer">
          <RadioStations
            Videos={videos}
            StationName={stationName}
          />
        </div>
        <div className="socialsContainer2">
          <div className="socials">
            <motion.div
              whileHover={{ scale: 1.09 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                window.open("https://github.com/luuthuong");
              }}
              className="link"
            >
              <img className="githubLogo" src={github} alt="" />
              Github
            </motion.div>
          </div>
        </div>
      </div>
      <div className="audioControlContainer">
        <AudioControls
          plauPause={handlePausePlaySwitch}
          buttonClass={BtnClass}
          playPauseImage={playPauseImg}
          buttonClass2={BtnClass2}
          LiveStreamAudio={currentLivestream}
          LiveStreamPlayPause={livestream}
        />
      </div>
      <div className={pauseScreen}>
        <PauseImage />
        <p style={{ marginTop: "0rem" }}>Music Paused</p>
      </div>
      <AdditionSettings youtube={youtubeChannel} radio={stationName} />
      <div className="videoContainer">
        <ReactPlayer
          className="vid"
          width="140%"
          height="140%"
          loop={true}
          playing={livestream}
          url={video}
          volume={0}
        />
      </div>
      <Loading />
    </div>
  );
}

export default App;
