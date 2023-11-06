import "../../styles/SideBar.css";
import IconDarkTheme from "../../assets/icon-dark-theme.svg";
import IconLightTheme from "../../assets/icon-light-theme.svg";
import HideSideBarIcon from "../../assets/icon-hide-sidebar.svg";
import SideBarSubject from "../sideBarSubject/sideBarSubject";
const SideBar = () => {
  return (
    <div className="side-bar-container">
      <div style={{ height: "73%" }}>
        <p className="text-L nums-of-subject-text"> ALL BOARDS (3)</p>
        <SideBarSubject />
      </div>
      <div className="switch-dark-mode-container">
        <img src={IconLightTheme} alt="" />
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
        <img src={IconDarkTheme} alt="" />
      </div>
      <div className="hide-side-bar-container">
        <img src={HideSideBarIcon} alt="" />
        <p className="subject-title">Hide Sidebar</p>
      </div>
    </div>
  );
};

export default SideBar;
