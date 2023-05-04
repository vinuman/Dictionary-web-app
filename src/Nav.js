import logo from "./assets/images/logo.svg";
import arrowdown from "./assets/images/icon-arrow-down.svg";
import moon from "./assets/images/icon-moon.svg";
const Nav = () => {
  return (
    <nav>
      <img src={logo}></img>
      <div className="nav-end">
        <div className="font-selection">
          <div className="font-selected">
            <p>Sans Serif</p>
            <img src={arrowdown}></img>
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
