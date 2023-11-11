import ImagePanel from "../../assets/icon-vertical-ellipsis.svg";
import { useTheme } from "../../Providers/themeContext";
import { DELETE_TASK, ADD_NEW_TASK } from "../../constants/ModalConstants";
import { useState } from "react";
const TaskDetailView = () => {
  const { openCloseModalHandle } = useTheme();
  const [openClosePopup, setOpenClosePopup] = useState(false);

  const openClosePopupHandle = () => {
    setOpenClosePopup(!openClosePopup);
  };

  return (
    <div>
      <div className="flex space-between spacing-Bottom-M">
        <p className="heading-L">Build settings UI</p>
        <img
          src={ImagePanel}
          alt="panel"
          className="btn-panel"
          onClick={() => openClosePopupHandle()}
        />
        {openClosePopup && (
          <div className="dropdown-panel" style={{ top: 50, right: 10 }}>
            <p
              className="spacing-Bottom-M gray text-XL"
              onClick={() => openCloseModalHandle(ADD_NEW_TASK)}
            >
              Edit board
            </p>
            <p
              className="danger text-XL"
              onClick={() => openCloseModalHandle(DELETE_TASK)}
            >
              Delete board
            </p>
          </div>
        )}
      </div>
      <p className="text-L bold gray text-Spacing spacing-Bottom-M">
        Subtasks (0 of 2)
      </p>
      <div className="checkbox-container spacing-Bottom-S">
        <input type="checkbox" />
        <p className="text-M margin-left-Xs ">Account page</p>
      </div>
      <div className="checkbox-container spacing-Bottom-S">
        <input type="checkbox" />
        <p className="text-M margin-left-Xs">Account page</p>
      </div>
      <p className="text-M gray bold spacing-Bottom-Xs">Current Status</p>
      <select className="spacing-Bottom-M">
        <option value="todo">Todo</option>
        <option value="doing">Doing</option>
        <option value="done">Done</option>
      </select>
    </div>
  );
};

export default TaskDetailView;
