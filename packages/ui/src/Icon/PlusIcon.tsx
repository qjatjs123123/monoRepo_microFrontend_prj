import React from "react";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
}

const PlusIcon = ({ width = 20, height = 20, color = "white" }: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.16663 10H15.8333M9.99996 4.16669V15.8334"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default PlusIcon;
