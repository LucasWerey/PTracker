import React from "react";
import { useSetup } from "./hooks/useSetup";
import TopBar from "./components/CustomTopBar";
import "./App.css";
import { invokeCommandWithErrorHandling } from "./utils/command";
import SideBar from "./components/SideBar";
import { gsap } from "gsap";
import { Flex } from "./ui";

const App: React.FC = () => {
  useSetup();

  const handleSidebarToggle = (isOpen: boolean) => {
    const newWidth = isOpen ? 150 : 50;
    gsap.to(".app-grid", {
      gridTemplateColumns: `${newWidth}px 1fr`,
      duration: 0.4,
      ease: "power2.inOut",
    });
  };

  const openWebview = () => {
    invokeCommandWithErrorHandling("create_window", {
      label: "test",
      url: "https://github.com",
    });
  };

  return (
    <Flex direction="column" rowGap={"2rem"}>
      <TopBar />
      <div className="app-grid">
        <SideBar onToggle={handleSidebarToggle} />
        <div className="main-content">
          <Flex
            direction="column"
            align="center"
            justify="center"
            width={"100%"}
          >
            <button onClick={openWebview}>Open Webview</button>
          </Flex>
        </div>
      </div>
    </Flex>
  );
};

export default App;
