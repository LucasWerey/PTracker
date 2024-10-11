import { useEffect } from "react";
import { invoke } from "@tauri-apps/api/core";
import { useSleep } from "./useSleep";

async function setup(sleep: (seconds: number) => Promise<void>) {
  console.log("Performing really heavy frontend setup task...");
  await sleep(3);
  console.log("Frontend setup task complete!");
  invoke("set_complete", { task: "frontend" });
}

export function useSetup() {
  const sleep = useSleep();

  useEffect(() => {
    setup(sleep);
  }, [sleep]);
}
