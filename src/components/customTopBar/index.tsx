import React from "react";
import { getCurrentWindow } from "@tauri-apps/api/window";
import {
  minimizeWindow,
  toggleFullscreen,
  closeWindow,
  maximizeWindow,
} from "../../utils/window";
import "./index.css";
import { useIsWindowFullScreen } from "../../hooks/useIsWindowFullScreen";
import { useIsWindowFocused } from "../../hooks/useIsWindowFocused";

const TopBar: React.FC = () => {
  const window = getCurrentWindow();
  const isWindowFullScreen = useIsWindowFullScreen();
  const isWindowFocused = useIsWindowFocused();

  if (isWindowFullScreen) return null;

  return (
    <div
      className="top-bar"
      onMouseDown={() => window.startDragging()}
      onDoubleClick={maximizeWindow}
    >
      <div className="window-controls">
        <button
          className={`close ${isWindowFocused ? "" : "inactive"}`}
          onClick={closeWindow}
          onMouseDown={(e) => e.stopPropagation()}
        >
          <span className="icon">✕</span>
        </button>
        <button
          className={`minimize ${isWindowFocused ? "" : "inactive"}`}
          onClick={minimizeWindow}
          onMouseDown={(e) => e.stopPropagation()}
        >
          <span className="icon">–</span>
        </button>
        <button
          className={`maximize ${isWindowFocused ? "" : "inactive"}`}
          onClick={toggleFullscreen}
          onMouseDown={(e) => e.stopPropagation()}
        >
          <span className="icon">+</span>
        </button>
      </div>
    </div>
  );
};

export default TopBar;
