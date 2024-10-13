import { useSetup } from "./hooks/useSetup";
import TopBar from "./components/customTopBar";
import "./App.css";
import { invokeCommandWithErrorHandling } from "./utils/command";

function App() {
  useSetup();

  const openWebview = () => {
    invokeCommandWithErrorHandling("create_window", {
      label: "test",
      url: "https://github.com",
    });
  };

  return (
    <div className="container">
      <TopBar />
      <div className="content">
        <button onClick={openWebview}>Open Webview</button>
      </div>
    </div>
  );
}

export default App;
