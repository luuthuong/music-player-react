import React from "react";
import rain from "../images/rain.png";
import { useEffect, useState } from "react";
import RainASMR from "../Sounds/rain.mp3";
import OceanASMR from "../Sounds/Ocean.mp3";
import whiteNoiseASMR from "../Sounds/whiteNoise.mp3";
import waves from "../images/waves.png";
import youtube from "../images/youtube.png";
import WhiteNoise from "../images/whiteNoise.png";
import { motion } from "framer-motion";

const Rain = new Audio(RainASMR);
const Ocean = new Audio(OceanASMR);
const whiteNoise = new Audio(whiteNoiseASMR);

const AdditionSettings =  (props) => {
  const [rainVolume, setRainVolume] = useState(0);
  const [oceanVolume, setOceanVolume] = useState(0);
  const [whiteNoiseVolume, setWhiteNoiseVolume] = useState(0);

  const [transitionValue, setTransitionValue] = useState(0);
  const [TitleLocation, setTitleLocation] = useState(350);

  Ocean.volume = oceanVolume;
  Rain.volume = rainVolume;
  whiteNoise.volume = whiteNoiseVolume;

  const rainPlayer = Rain.play();
  const oceanPlayer = Ocean.play();
  const whiteNoisePlayer = whiteNoise.play();
  const promises = Promise.all([rainPlayer,oceanPlayer,whiteNoisePlayer]);
  if(!promises !== undefined){
    promises.then(() => {
  }).catch(error => {
  });
  }
  const setTransition = () => {
    setTransitionValue(100);
  };

  setTimeout(function () {
    setTransitionValue(-450); //Title Pop in and out
    setTitleLocation(420);
  }, 2000);

  useEffect(() => {
    setTransition();
    setTitleLocation(1000);
  }, [props.radio]);

  return (
    <div className="info-container">
      <div className="time"></div>
      <div className="song-name">
        <motion.div
          animate={{ x: transitionValue }}
          transition={{ delay: 1 }}
          className="radio-station-title"
          style={{ left: TitleLocation }}
        >
          {props.radio}
          <div className="social-container">
            <a target="_blank" href={props.youtube}>
              {" "}
              <img src={youtube} className="social-icon" alt="" />{" "}
            </a>
          </div>
        </motion.div>
      </div>
      <div className="other-sound-container">
        <div className="align">
          <input
            className="sound-dial"
            type="range"
            orient="vertical"
            min={0}
            max={1}
            value={rainVolume}
            onChange={(event) => {
              setRainVolume(event.target.valueAsNumber);
            }}
            step={0.2}
          />
          <div className="other-sounds">
            <img src={rain} className="img-sizing" alt="" />
          </div>
        </div>
        <div className="align">
          <input
            className="sound-dial"
            type="range"
            orient="vertical"
            min={0}
            max={1}
            value={oceanVolume}
            onChange={(event) => {
              setOceanVolume(event.target.valueAsNumber);
            }}
            step={0.2}
          />
          <div className="other-sounds">
            <img src={waves} className="img-sizing" alt="" />
          </div>
        </div>
        <div className="align">
          <input
            className="sound-dial"
            type="range"
            orient="vertical"
            min={0}
            max={1}
            value={whiteNoiseVolume}
            onChange={(event) => {
              setWhiteNoiseVolume(event.target.valueAsNumber);
            }}
            step={0.2}
          />
          <div className="other-sounds">
            <img src={WhiteNoise} className="img-sizing" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionSettings;
