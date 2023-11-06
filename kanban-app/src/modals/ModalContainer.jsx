import "../styles/Modal.css";
import AddNewTaskView from "./addNewTask/AddNewTaskView";
import AddEditBoardView from "./editBoard/AddEditBoardView";
import TaskDetailView from "./taskDetail/TaskDetailView";
import DeleteModalView from "./deleteModal/DeleteModalView";
const ModalContainer = () => {
  return (
    <div className="modal">
      <AddNewTaskView />
      {/* <AddEditBoardView /> */}
      {/* <TaskDetailView /> */}
      {/* <DeleteModalView /> */}
    </div>
  );
};

export default ModalContainer;
