import React from "react";
import { typeStyles, weightStyles } from "./style";

interface TextProps {
  children: React.ReactNode;
  type?: "title" | "body" | "caption" | "display";
  size?: "1" | "2" | "3" | "4";
  weight?: "normal" | "medium" | "semibold" | "bold";
  className?: string;
}

export const Text: React.FC<TextProps> = ({
  children,
  type = "body",
  size = "1",
  weight = "normal",
  className,
}) => {
  const typeKey = `${type}_${size}`;
  return (
    <span css={[typeStyles[typeKey], weightStyles[weight]]} className={className}>
      {children}
    </span>
  );
};
