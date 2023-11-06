import CloseIcon from "../../assets/icon-cross.svg";

const AddEditBoardView = () => {
  return (
    <div>
      <p className="heading-L spacing-Bottom-M ">Edit Board</p>
      <div className="spacing-Bottom-M">
        <p className="text-M gray bold spacing-Bottom-Xs">Board Name</p>
        <input type="text" placeholder="e.g. Take coffe break" />
      </div>
      <div className="spacing-Bottom-Xs">
        <p className="text-M gray bold spacing-Bottom-Xs">Board Columns</p>
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
      <button className="btn spacing-Bottom-M">+Add New Column</button>

      <button className="btn spacing-Bottom-M">Save Changes</button>
    </div>
  );
};

export default AddEditBoardView;
