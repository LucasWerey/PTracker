import { useCallback } from "react";

export function useSleep() {
  const sleep = useCallback((seconds: number): Promise<void> => {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
  }, []);

  return sleep;
}
