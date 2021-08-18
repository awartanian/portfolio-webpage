import React from "react";
import "./BgImageColored.scss"; 

import orangeBackground from "../../Images/Background/orange-background.png";
import blueBackground from "../../Images/Background/blue-background.png";
import yellowBackground from "../../Images/Background/yellow-background.png";

const BgImageColored = ({themeColor}) => {
  return (
    <>
      <div className="colored-image-container">
        <img
          src={orangeBackground}
          className={themeColor === "orange" ? "orangeBackground" : null}
          alt="background"
        />
        <img
          src={blueBackground}
          className={themeColor === "blue" ? "blueBackground" : null}
          alt="background"
        />
        <img
          src={yellowBackground}
          className={themeColor === "yellow" ? "yellowBackground" : null}
          alt="background"
        />
      </div>
    </>
  );
};

export default BgImageColored;
