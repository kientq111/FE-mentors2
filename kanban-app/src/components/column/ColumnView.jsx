import "../../styles/Column&Task.css";
import TaskCard from "../taskCard/TaskCardView";

const Columns = () => {
  return (
    <div>
      <p className="col-name heading-S">Todo (0)</p>
      <TaskCard />
      <TaskCard />
      <TaskCard />
    </div>
  );
};

export default Columns;
