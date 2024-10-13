import { getCurrentWindow } from "@tauri-apps/api/window";
import { useState, useEffect } from "react";

export const useIsWindowFullScreen = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    const window = getCurrentWindow();

    const checkIfWindowIsFullScreen = async () => {
      const isFullScreen = await window.isFullscreen();
      setIsFullScreen(isFullScreen);
    };

    const handleFullscreenChange = async () => {
      const isFullScreen = await window.isFullscreen();
      setIsFullScreen(isFullScreen);
    };

    checkIfWindowIsFullScreen();

    window.listen("tauri://resize", handleFullscreenChange);
    window.listen("tauri://fullscreen-change", handleFullscreenChange);
  }, []);

  return isFullScreen;
};
