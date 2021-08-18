import React from "react";
import "./BgImageMain.scss";

import whiteBackground from "../../Images/Background/white-background.jpg";
import darkBackground from "../../Images/Background/dark-background.jpg";

const BgImageMain = ({ darkMode }) => {
  return (
    <>
      <div className="background-image-container">
        <img
          src={whiteBackground}
          className="whiteBackground"
          alt="background"
        />
        <img
          src={darkBackground}
          className={darkMode ? "darkBackground" : null}
          alt="background"
        />
      </div>
    </>
  );
};

export default BgImageMain;
