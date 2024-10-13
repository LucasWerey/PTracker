import {
  getCurrentWindow,
  LogicalSize,
  LogicalPosition,
} from "@tauri-apps/api/window";

const window = getCurrentWindow();

export const minimizeWindow = async () => {
  await window.minimize();
};

export const toggleFullscreen = async () => {
  const isFullScreen = await window.isFullscreen();
  if (!isFullScreen) await window.setFullscreen(true);
};

export const closeWindow = async () => {
  await window.close();
};

export const maximizeWindow = async () => {
  const isMaximized = await window.isMaximized();
  if (isMaximized) {
    setWindowSize(800, 600);
    await window.center();
  } else {
    await window.maximize();
  }
};

export const hideWindow = async () => {
  await window.hide();
};

export const showWindow = async () => {
  await window.show();
};

export const setWindowTitle = async (title: string) => {
  await window.setTitle(title);
};

export const setWindowPosition = async (x: number, y: number) => {
  await window.setPosition(new LogicalPosition(x, y));
};

export const setWindowSize = async (width: number, height: number) => {
  await window.setSize(new LogicalSize(width, height));
};

export const isWindowFocused = async (): Promise<boolean> => {
  return await window.isFocused();
};
