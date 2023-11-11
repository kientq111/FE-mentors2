import React from "react";
import "../styles/Modal.css";
import AddNewTaskView from "./addNewTask/AddNewTaskView";
import AddEditBoardView from "./editBoard/AddEditBoardView";
import TaskDetailView from "./taskDetail/TaskDetailView";
import DeleteModalView from "./deleteModal/DeleteModalView";
import {
  ADD_NEW_TASK,
  EDIT_BOARD,
  DELETE_TASK,
  TASK_DETAIL,
} from "../constants/ModalConstants";

const ModalContainer = ({ modalType, openCloseModalHandle }) => {
  let modalComponent;

  switch (modalType) {
    case ADD_NEW_TASK:
      modalComponent = <AddNewTaskView />;
      break;
    case EDIT_BOARD:
      modalComponent = <AddEditBoardView />;
      break;
    case TASK_DETAIL:
      modalComponent = <TaskDetailView />;
      break;
    case DELETE_TASK:
      modalComponent = <DeleteModalView />;
      break;
    default:
      modalComponent = null;
  }

  const closeModalHandle = (e) => {
    const modalContainer = document.querySelector(".modal-container");
    if (e.target === modalContainer) {
      openCloseModalHandle(null);
    }
  };

  return (
    <div className="modal-container" onClick={(e) => closeModalHandle(e)}>
      <div className="modal">{modalComponent}</div>
    </div>
  );
};

export default ModalContainer;
