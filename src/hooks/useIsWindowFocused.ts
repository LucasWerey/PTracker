import { useEffect, useState } from "react";
import { getCurrentWindow } from "@tauri-apps/api/window";

export const useIsWindowFocused = () => {
  const [isFocused, setIsFocused] = useState<boolean>(true);

  useEffect(() => {
    const window = getCurrentWindow();

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    window.listen("tauri://focus", handleFocus);
    window.listen("tauri://blur", handleBlur);
  }, []);

  return isFocused;
};
