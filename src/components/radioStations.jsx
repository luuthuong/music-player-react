import React from "react";
import { motion } from "framer-motion";
import triangle from "../images/playBtn.png";

function RadioStations({ StationName, Videos }) {
  const videoItems = Videos.map((item, index) =>(
    <motion.div key={index} animate={{ opacity: [0, 1] }} transition={{ delay: index * 0.25 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={item.action}
          className={StationName === item.title
            ? "active-station"
            : "station"}
        >
          <img
            className={StationName === item.title
              ? "active-triangle"
              : "triangle"}
            src={triangle}
            alt="" />
          {item.title}
        </motion.div>
      </motion.div>))
  return (
    <div className="radio-list">
      {videoItems}
    </div>
  );
}

export default RadioStations;
