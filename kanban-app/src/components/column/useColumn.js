const useColumns = () => {
  const onDragHandle = (e, data, colName) => {
    let newData = { colName: colName, ...data };
    newData = JSON.stringify(newData);
    e.dataTransfer.setData("text", newData);
  };

  const onDropHandle = (e, colName, boardHandle, boardData) => {
    const data = e.dataTransfer.getData("text");
    const newData = JSON.parse(data);

    const updatedData = boardData.map((column) => {
      if (column.colName === newData.colName) {
        column.task = column.task.filter(
          (task) => task.content !== newData.content
        );
      }
      if (column.colName === colName) {
        column.task.push({ content: newData.content });
      }
      return column;
    });
    console.log(updatedData);
    boardHandle(updatedData);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return { onDragHandle, onDropHandle, handleDragOver };
};

export default useColumns;
