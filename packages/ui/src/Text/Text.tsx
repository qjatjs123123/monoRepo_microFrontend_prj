import React from "react";
import classNames from "classnames";
import { typeClasses, weightClasses } from "./style";

interface TextProps {
  children: React.ReactNode;
  className?: string;
  type?: "title" | "body" | "caption" | "display";
  size?: "1" | "2" | "3" | "4";
  weight?: "normal" | "medium" | "semibold" | "bold";
}

export const Text: React.FC<TextProps> = ({
  children,
  type = "body",
  size = "1",
  weight = "normal",
  className,
}) => {
  return (
    <span
      className={classNames(
        typeClasses[`${type}_${size}`],
        weightClasses[weight],
        className
      )}
    >
      {children}
    </span>
  );
};
