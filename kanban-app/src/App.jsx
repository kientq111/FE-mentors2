import "./styles/Typography.css";
import BoardTask from "./components/boardTask/BoardTaskView";
import Header from "./components/header/Header";
import { ThemeProvider } from "./Providers/themeContext";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <BoardTask />
    </ThemeProvider>
  );
}

export default App;
