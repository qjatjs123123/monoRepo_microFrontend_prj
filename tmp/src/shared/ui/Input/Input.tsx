'use client'

import classNames from "classnames";
import { PropsWithChildren } from "react";
import styles from "./Input.module.css";

type Props = PropsWithChildren<{
  type?: "text" | "password" | "email" | "search";
  size?: "small" | "medium" | "large";
  rd?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  className?: string;
  readonly?: boolean;
  placeholder?: string;
  value?: string;
  name?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLElement>;
  onFocus?: React.FocusEventHandler<HTMLElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
}>;

export function Input(props: Props) {
  const {
    type = "text",
    size = "medium",
    rd = "md",
    readonly = false,
    placeholder,
    value,
    onChange,
    onBlur,
    onFocus,
    className,
    onKeyDown,
    name,
    ...rest
  } = props;

  return (
    <input
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      readOnly={readonly}
      className={classNames(
        styles.input,
        styles[`input--size-${size}`],
        styles[`input--rd-${rd}`],
        className
      )}
      {...rest}
    />
  );
}
