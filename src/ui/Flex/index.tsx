import React from "react";

interface FlexProps {
  direction?: "row" | "column";
  align?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
  justify?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  bg?: string;
  minWidth?: string | number;
  width?: string | number;
  minHeight?: string | number;
  height?: string | number;
  m?: string | number;
  mt?: string | number;
  mr?: string | number;
  mb?: string | number;
  ml?: string | number;
  p?: string | number;
  pt?: string | number;
  pr?: string | number;
  pb?: string | number;
  pl?: string | number;
  borderRadius?: string | number;
  border?: string;
  flex?: number | string;
  columnGap?: string | number;
  rowGap?: string | number;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const Flex: React.FC<FlexProps> = ({
  direction = "row",
  align = "stretch",
  justify = "flex-start",
  wrap = "nowrap",
  bg,
  minWidth,
  width,
  minHeight,
  height,
  m,
  mt,
  mr,
  mb,
  ml,
  p,
  pt,
  pr,
  pb,
  pl,
  borderRadius,
  border,
  flex,
  columnGap,
  rowGap,
  style,
  children,
}) => {
  const flexStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: direction,
    alignItems: align,
    justifyContent: justify,
    flexWrap: wrap,
    backgroundColor: bg,
    minWidth: minWidth,
    width: width,
    minHeight: minHeight,
    height: height,
    margin: m,
    marginTop: mt,
    marginRight: mr,
    marginBottom: mb,
    marginLeft: ml,
    padding: p,
    paddingTop: pt,
    paddingRight: pr,
    paddingBottom: pb,
    paddingLeft: pl,
    borderRadius: borderRadius,
    border: border,
    flex: flex,
    columnGap: columnGap,
    rowGap: rowGap,
    ...style,
  };

  return <div style={flexStyle}>{children}</div>;
};

export default Flex;
