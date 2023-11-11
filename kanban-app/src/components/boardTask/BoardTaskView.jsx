import { useState } from "react";
import "../../styles/Board.css";
import Columns from "../column/ColumnView";
import NewColumn from "../newColumn/NewColumnView";
import SideBar from "../sideBar/SideBar";

const Data = [
  {
    colName: "To do",
    task: [
      { content: "Task 1" },
      { content: "Task 2" },
      { content: "Task 3" },
      { content: "Task 4" },
      { content: "Task 5" },
      { content: "Task 6" },
    ],
  },
  {
    colName: "Doing",
    task: [
      { content: "Task 7" },
      { content: "Task 8" },
      { content: "Task 9" },
      { content: "Task 10" },
      { content: "Task 11" },
    ],
  },
  {
    colName: "Done",
    task: [
      { content: "Task 12" },
      { content: "Task 13" },
      { content: "Task 14" },
      { content: "Task 15" },
      { content: "Task 16" },
    ],
  },
];

const BoardTask = () => {
  const [boardData, setBoardData] = useState(Data);

  const boardHandle = (newData) => {
    setBoardData(newData);
  };

  return (
    <div className="board">
      <SideBar />
      {boardData.map((item) => {
        return (
          <Columns
            key={item.colName}
            colName={item.colName}
            tasks={item.task}
            boardHandle={boardHandle}
            boardData={boardData}
          />
        );
      })}
      <NewColumn />
    </div>
  );
};

export default BoardTask;
