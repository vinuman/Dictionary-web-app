import { useState, useEffect } from "react";
import logo from "./assets/images/logo.svg";
import arrowdown from "./assets/images/icon-arrow-down.svg";
import moon from "./assets/images/icon-moon.svg";

const Nav = () => {
  const [font, setFont] = useState("sans-serif");
  const [dark, setDark] = useState(false);
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

  const handleColorTheme = () => {
    if (dark) {
      document.body.style.backgroundColor = "";
      document.querySelector(".font-selected p").style.color = "";
      document.querySelectorAll(".fonts p").forEach((p) => {
        p.style.color = "";
      });
      document.querySelector(".fonts").style.backgroundColor = "";
      document.querySelector(".fonts").style.border = "";
      document.querySelector(
        '.search input[type="text"]'
      ).style.backgroundColor = "";
      document.querySelector('.search input[type="text"]').style.color = "";

      document.querySelector(".title").style.color = "";
      document.querySelectorAll("ul li").forEach((item) => {
        item.style.color = "";
      });
      setDark(false);
    } else {
      document.body.style.backgroundColor = "#050505";
      document.querySelector(".font-selected p").style.color = "#fff";
      document.querySelectorAll(".fonts p").forEach((p) => {
        p.style.color = "#fff";
      });
      document.querySelector(".fonts").style.backgroundColor = "#1F1F1F";
      document.querySelector(".fonts").style.border = "1px solid #A445ED";
      document.querySelector(
        '.search input[type="text"]'
      ).style.backgroundColor = "#1F1F1F";
      document.querySelector('.search input[type="text"]').style.color = "#fff";
      document.querySelector(".title").style.color = "#fff";
      document.querySelectorAll("ul li").forEach((item) => {
        item.style.color = "#fff";
      });
      setDark(true);
    }
  };

  return (
    <nav>
      <img src={logo}></img>
      <div className="nav-end">
        <div onClick={() => handleFontSelection} className="font-selection">
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
                style={{ fontSize: "1.8rem", fontFamily: "serif" }}
              >
                Serif
              </p>
              <p
                onClick={() => handleFonts("mono")}
                style={{ fontSize: "1.8rem", fontFamily: "Mono" }}
              >
                Mono
              </p>
            </div>
          </div>
        </div>
        <label className="toggle">
          <input onClick={handleColorTheme} type="checkbox"></input>
          <span className="slider"></span>
        </label>
        <img className="moon" src={moon}></img>
      </div>
    </nav>
  );
};

export default Nav;
