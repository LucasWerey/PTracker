import { writeText, readText } from "@tauri-apps/plugin-clipboard-manager";

export const copyToClipboard = async (text: string): Promise<void> => {
  await writeText(text);
};

export const readFromClipboard = async (): Promise<string> => {
  return await readText();
};
