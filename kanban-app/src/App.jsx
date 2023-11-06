import "./styles/Typography.css";
import BoardTask from "./components/boardTask/BoardTaskView";
import Header from "./components/header/Header";
import ModalContainer from "./modals/ModalContainer";

function App() {
  return (
    <div>
      <Header />
      <BoardTask />
      {/* <ModalContainer /> */}
    </div>
  );
}

export default App;
