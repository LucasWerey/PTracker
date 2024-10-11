import { invoke } from "@tauri-apps/api/core";
import { useSetup } from "./hooks/useSetup";
import "./App.css";

function App() {
  useSetup();
  async function openWebview() {
    await invoke("create_window", { label: "test", url: "https://github.com" });
  }

  return (
    <div className="container">
      <button onClick={openWebview}>Open Webview</button>
    </div>
  );
}

export default App;
