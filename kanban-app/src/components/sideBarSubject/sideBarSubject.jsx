import IconBoard from "../../assets/icon-board.svg";
import { EDIT_BOARD } from "../../constants/ModalConstants";
import { useTheme } from "../../Providers/themeContext";

const SideBarSubject = () => {
  const { openCloseModalHandle } = useTheme();

  return (
    <div className="side-bar-subject-container">
      <div>
        <img src={IconBoard} alt="iconBoard" />
        <p className="text-XL subject-title">Platform Launch</p>
      </div>
      <div className="bg-Blue">
        <img src={IconBoard} alt="iconBoard" />
        <p className="text-XL subject-title text-white">Marketing</p>
      </div>
      <div>
        <img src={IconBoard} alt="iconBoard" />
        <p className="text-XL subject-title">Roadmap</p>
      </div>
      <div onClick={() => openCloseModalHandle(EDIT_BOARD)}>
        <img src={IconBoard} alt="iconBoard" />
        <p className="text-XL subject-title" style={{ color: "#635fc7" }}>
          +Create New Board
        </p>
      </div>
    </div>
  );
};

export default SideBarSubject;
