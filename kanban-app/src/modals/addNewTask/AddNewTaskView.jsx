import CloseIcon from "../../assets/icon-cross.svg";

const AddNewTaskView = () => {
  return (
    <div>
      <p className="heading-L spacing-Bottom-M ">Add New Task</p>
      <div className="spacing-Bottom-M">
        <p className="text-M gray bold spacing-Bottom-Xs">Task Name</p>
        <input type="text" placeholder="e.g. Take coffe break" />
      </div>
      <div className="spacing-Bottom-M">
        <p className="text-M gray bold spacing-Bottom-Xs">Description</p>
        <textarea className="" cols="30" rows="10" />
      </div>
      <div className="spacing-Bottom-Xs">
        <p className="text-M gray bold spacing-Bottom-Xs">Subtasks</p>
        <div className="flex align-center spacing-Bottom-S">
          <input type="text" className="width-70" />
          <img
            src={CloseIcon}
            className="close-icon margin-left-Xs c-Pointer"
          />
        </div>
        <div className="flex align-center spacing-Bottom-S">
          <input type="text" className="width-70" />
          <img
            src={CloseIcon}
            className="close-icon margin-left-Xs c-Pointer"
          />
        </div>
        <div className="flex align-center spacing-Bottom-S">
          <input type="text" className="width-70" />
          <img
            src={CloseIcon}
            className="close-icon margin-left-Xs c-Pointer"
          />
        </div>
      </div>
      <button className="btn spacing-Bottom-M">+Add New Subtask</button>
      <div className="spacing-Bottom-M">
        <p className="text-M gray bold spacing-Bottom-Xs">Current Status</p>
        <select className="spacing-Bottom-S">
          <option value="todo">Todo</option>
          <option value="doing">Doing</option>
          <option value="done">Done</option>
        </select>
      </div>
      <button className="btn spacing-Bottom-M">Create Task</button>
    </div>
  );
};

export default AddNewTaskView;
