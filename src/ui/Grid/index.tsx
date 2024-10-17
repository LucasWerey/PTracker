import React from "react";

interface GridProps {
  templateColumns?: string;
  templateRows?: string;
  gap?: string | number;
  columnGap?: string | number;
  rowGap?: string | number;
  style?: React.CSSProperties;
  children: React.ReactNode;
  width?: string | number;
  height?: string | number;
  minWidth?: string | number;
  minHeight?: string | number;
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
}

const Grid: React.FC<GridProps> = ({
  templateColumns,
  templateRows,
  gap,
  columnGap,
  rowGap,
  style,
  width,
  height,
  minWidth,
  minHeight,
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
  children,
}) => {
  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: templateColumns,
    gridTemplateRows: templateRows,
    gap: gap,
    columnGap: columnGap,
    rowGap: rowGap,
    width,
    height,
    minWidth,
    minHeight,
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
    overflow: "scroll",
    ...style,
  };

  return <div style={gridStyle}>{children}</div>;
};

export default Grid;
