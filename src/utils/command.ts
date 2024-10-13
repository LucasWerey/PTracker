import { invoke } from "@tauri-apps/api/core";

export const invokeCommand = async <T>(
  command: string,
  args?: Record<string, unknown>
): Promise<T> => {
  return await invoke<T>(command, args);
};

export const invokeCommandWithErrorHandling = async <T>(
  command: string,
  args?: Record<string, unknown>
): Promise<T | null> => {
  try {
    return await invoke<T>(command, args);
  } catch (error) {
    console.error(`Error invoking command ${command}:`, error);
    return null;
  }
};

export const invokeCommandWithTimeout = async <T>(
  command: string,
  timeout: number,
  args?: Record<string, unknown>
): Promise<T | null> => {
  return new Promise<T | null>((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error(`Command ${command} timed out after ${timeout}ms`));
    }, timeout);

    invoke<T>(command, args)
      .then((result) => {
        clearTimeout(timer);
        resolve(result);
      })
      .catch((error) => {
        clearTimeout(timer);
        reject(error);
      });
  });
};

export const invokeCommandWithRetry = async <T>(
  command: string,
  args?: Record<string, unknown>,
  retries: number = 3,
  delay: number = 1000
): Promise<T | null> => {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await invoke<T>(command, args);
    } catch (error) {
      if (attempt < retries) {
        await new Promise((resolve) => setTimeout(resolve, delay));
      } else {
        console.error(
          `Failed to invoke command ${command} after ${retries} attempts:`,
          error
        );
        return null;
      }
    }
  }
  return null;
};
