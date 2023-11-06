import "../../styles/Board.css";
import Columns from "../column/ColumnView";
import NewColumn from "../newColumn/NewColumnView";
import SideBar from "../sideBar/SideBar";
const BoardTask = () => {
  return (
    <div className="board">
      <SideBar />
      <Columns />
      <Columns />
      <Columns />
      <NewColumn />
    </div>
  );
};

export default BoardTask;
