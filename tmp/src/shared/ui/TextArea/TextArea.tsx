import React from "react";
import classNames from "classnames"; 
import styles from "./TextArea.module.css";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export function TextArea({ className, ...props }: TextareaProps) {
  return <textarea className={classNames(styles.textarea, className)} {...props} />;
}
