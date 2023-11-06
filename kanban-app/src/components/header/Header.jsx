import Logo from "../../assets/logo-light.svg";
import DotImage from "../../assets/icon-vertical-ellipsis.svg";
import "../../styles/Header.css";
const Header = () => {
  return (
    <div className="header-container">
      <div>
        <div className="logo">
          <img src={Logo} alt="" />
          <p>Kanban</p>
        </div>
        <p className="heading-L">Platform Launch</p>
      </div>
      <div>
        <button className="btn-add-task">+Add New Task</button>
        <img src={DotImage} className="btn-panel" alt="" />
        {/* <div className="dropdown-panel">
          <p className="spacing-Bottom-M gray text-XL">Edit board</p>
          <p className="danger text-XL">Delete board</p>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
