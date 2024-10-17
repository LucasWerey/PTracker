import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./index.css";
import { Flex } from "../../ui";

interface SideBarProps {
  onToggle: (isOpen: boolean) => void;
}

const SideBar: React.FC<SideBarProps> = ({ onToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showText, setShowText] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(drawerRef.current, {
        x: 0,
        width: "150px",
        duration: 0.5,
        display: "block",
      });
    } else {
      gsap.to(drawerRef.current, { x: "-10%", width: "50px", duration: 0.5 });
    }
    onToggle(isOpen);
  }, [isOpen, onToggle]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) gsap.delayedCall(0.1, () => setShowText(true));
    else setShowText(false);
  };

  return (
    <Flex height="100%">
      <div ref={drawerRef} className="sidebar-container">
        <div
          onClick={handleToggle}
          className="toggle-button"
          aria-expanded={isOpen}
        >
          {isOpen ? "<" : ">"}
        </div>
        <div className="menu-item">
          <span role="img" aria-label="home">
            🏠
          </span>
          {showText && <span>Home</span>}
        </div>
        <div className="menu-item">
          <span role="img" aria-label="search">
            🔍
          </span>
          {showText && <span>Search</span>}
        </div>
        <div className="menu-item">
          <span role="img" aria-label="settings">
            ⚙️
          </span>
          {showText && <span>Settings</span>}
        </div>
      </div>
    </Flex>
  );
};

export default SideBar;
