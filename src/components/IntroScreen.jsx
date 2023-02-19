import React from "react";
import ReactPlayer from "react-player";
import "../styles/introScreen.css"
import logo from '../images/logo.jpeg'
import { Link } from 'react-router-dom';
import URL_CONSTANT from "../constant/url.constant";

const Hero = () => {
    return(
        <div>
        <div className="heroContainer">
          <div className="videoContainer2">
            <ReactPlayer
              className="react-player"
              url={URL_CONSTANT.INTRO_EMMBED_VIDEO}
              width="100%"
              height="100%"
              position="relative"
              overflow="hidden"
              playing={true}
              loop={true}
              muted={true}
            />
          </div>
        </div>
        <div className="titleContainer">
          <img className="heroLogo" src={logo} alt="" />
          <h1 className="tracking-in-expand-fwd">StudyBEATS</h1>
          <h3 className="subTitle">Try to be better !!</h3>
          <div className="note-position-1 note-amination">&#9835;</div>
          <div className="note-position-2 note-amination animation-delay-2">
            &#9833;
          </div>
          <div className="bubbleContainer">
            <div className="bubble1"></div>
            <div className="bubble2"></div>
            <div className="bubble3"></div>
          </div>
          <div className="wrap">
            <Link to="/music">
                <button className="button">Start Listening</button>
            </Link>         
          </div>
        </div>
        <ReactPlayer 
              className="react-player"
              url= {URL_CONSTANT.INTRO_LIVE_VIDEO}
              width="0%"
              height="0%"
              position="absolute"
              top="0"
              left="0"
              overflow="hidden"
              playing={true}
              loop={true}
              volume={30}
            />
      </div>
    )
}

export default Hero