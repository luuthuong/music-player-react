import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Hero from './IntroScreen'
import musicVideoJson from '../assets/data-video.json';
import podCastVideoJson from '../assets/podcast-video.json';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/music" element={<App data={musicVideoJson} />} />
        <Route path="/podcast" element={<App data={podCastVideoJson}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
