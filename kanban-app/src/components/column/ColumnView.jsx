import "../../styles/Column&Task.css";
import TaskCard from "../taskCard/TaskCardView";
import useColumns from "./useColumn";
const Columns = ({ colName, tasks, boardHandle, boardData }) => {
  const { onDragHandle, onDropHandle, handleDragOver } = useColumns();

  return (
    <div
      key={colName}
      onDragOver={handleDragOver}
      onDrop={(e) => onDropHandle(e, colName, boardHandle, boardData)}
    >
      <p className="col-name heading-S">
        {colName} ({tasks.length})
      </p>
      {tasks.map((item) => {
        return (
          <div
            draggable
            key={item.content}
            onDragStart={(e) => onDragHandle(e, item, colName)}
          >
            <TaskCard key={item.content} content={item.content} />
          </div>
        );
      })}
    </div>
  );
};

export default Columns;
