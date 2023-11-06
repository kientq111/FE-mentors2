const DeleteModalView = () => {
  return (
    <div style={{padding:10}}>
      <p className="heading-L danger spacing-Bottom-M">Delete this board?</p>
      <p className="text-L gray spacing-Bottom-M">
        Are you sure you want to delete the "Platform Launch" board? This action
        will remove all columns and tasks and cannot be reversed.
      </p>
      <div className="flex space-around spacing-Bottom-M">
        <button className="delete-btn btn-Danger">Delete</button>
        <button className="delete-btn btn-Light">Cancel</button>
      </div>
    </div>
  );
};

export default DeleteModalView;
