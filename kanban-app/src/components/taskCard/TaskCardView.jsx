import { TASK_DETAIL } from "../../constants/ModalConstants";
import { useTheme } from "../../Providers/themeContext";

const TaskCard = ({ content }) => {
  const { openCloseModalHandle } = useTheme();
  return (
    <div
      className="task task-title heading-M"
      onClick={() => openCloseModalHandle(TASK_DETAIL)}
    >
      {content}
      <p className="nums-of-subtask text-M">0 of 6 subtask</p>
    </div>
  );
};

export default TaskCard;
