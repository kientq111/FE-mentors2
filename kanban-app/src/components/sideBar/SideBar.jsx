import "../../styles/SideBar.css";
import IconDarkTheme from "../../assets/icon-dark-theme.svg";
import IconLightTheme from "../../assets/icon-light-theme.svg";
import HideSideBarIcon from "../../assets/icon-hide-sidebar.svg";
import SideBarSubject from "../sideBarSubject/sideBarSubject";
import useSideBar from "./useSideBar";

const SideBar = () => {
  const { toggleDarkMode } = useSideBar();


  return (
    <div className="side-bar-container">
      <div style={{ height: "71%" }}>
        <p className="text-L nums-of-subject-text"> ALL BOARDS (3)</p>
        <SideBarSubject />
      </div>
      <div>
        <div className="switch-dark-mode-container">
          <img src={IconLightTheme} alt="" />
          <label className="switch">
            <input type="checkbox" onClick={() => toggleDarkMode()} />
            <span className="slider round"></span>
          </label>
          <img src={IconDarkTheme} alt="" />
        </div>
        <div className="hide-side-bar-container">
          <img src={HideSideBarIcon} alt="" />
          <p className="subject-title">Hide Sidebar</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
