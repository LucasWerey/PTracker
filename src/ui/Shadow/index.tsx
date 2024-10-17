import React from "react";

interface ShadowProps {
  shadow?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const Shadow: React.FC<ShadowProps> = ({
  shadow = "0px 4px 6px rgba(0, 0, 0, 0.1)",
  style,
  children,
}) => {
  const shadowStyle: React.CSSProperties = {
    boxShadow: shadow,
    ...style,
  };

  return <div style={shadowStyle}>{children}</div>;
};

export default Shadow;
