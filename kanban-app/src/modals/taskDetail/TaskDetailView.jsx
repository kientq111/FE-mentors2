import ImagePanel from "../../assets/icon-vertical-ellipsis.svg";

const TaskDetailView = () => {
  return (
    <div>
      <div className="flex space-between spacing-Bottom-M">
        <p className="heading-L">Build settings UI</p>
        <img src={ImagePanel} alt="panel" className="btn-panel" />
        <div className="dropdown-panel" style={{ top: 50 }}>
          <p className="spacing-Bottom-M gray text-XL">Edit board</p>
          <p className="danger text-XL">Delete board</p>
        </div>
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
