import React from "react";

interface CloseIconProps {
  width?: number;
  height?: number;
  className?: string;
  stroke?: string;
}

export const CloseIcon: React.FC<CloseIconProps> = ({
  width = 24,
  height = 24,
  className,
  stroke = "#020617",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M18 6L6 18M6 6L18 18"
      stroke={stroke}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
