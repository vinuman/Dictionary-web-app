import { useState, useEffect } from "react";
import logo from "./assets/images/logo.svg";
import arrowdown from "./assets/images/icon-arrow-down.svg";
import moon from "./assets/images/icon-moon.svg";

const Nav = () => {
  const [font, setFont] = useState("sans-serif");
  const handleFonts = (param) => {
    setFont(param);
  };

  useEffect(() => {
    document.body.classList.forEach((className) => {
      document.body.classList.remove(className);
    });
    document.body.classList.add(font);
  }, [font]);

  const handleFontSelection = () => {
    document.querySelector(".fonts").classList.toggle("show");
  };

  return (
    <nav>
      <img src={logo}></img>
      <div className="nav-end">
        <div onClick={handleFontSelection} className="font-selection">
          <div className="font-selected">
            <p>{font}</p>
            <img src={arrowdown}></img>
            <div className="fonts">
              <p
                onClick={() => handleFonts("sans-serif")}
                style={{ fontFamily: "sans-serif" }}
              >
                Sans Serif
              </p>
              <p
                onClick={() => handleFonts("Serif")}
                style={{ fontFamily: "serif" }}
              >
                Serif
              </p>
              <p
                onClick={() => handleFonts("mono")}
                style={{ fontFamily: "Mono" }}
              >
                Mono
              </p>
            </div>
          </div>
        </div>
        <label className="toggle">
          <input type="checkbox"></input>
          <span className="slider"></span>
        </label>
        <img className="moon" src={moon}></img>
      </div>
    </nav>
  );
};

export default Nav;
