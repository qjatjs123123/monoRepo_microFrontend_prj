import classNames from "classnames";
import { PropsWithChildren } from "react";
import styles from "./CheckBox.module.css";
import CheckIcon from "../Icon/CheckIcon";

type Props = PropsWithChildren<{
  checked?: boolean;
  type?: "title" | "normal";
  rd?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
  onChange?: () => void;
  id?: string;
  content?: string;
}>;

export function CheckBox(props: Props) {
  const {
    checked = false,
    type = "normal",
    disabled = false,
    content,
    onChange = () => {},
    id,
    className,
  } = props;

  return (
    <div className={classNames(styles.container, className)}>
      <button
        type="button"
        className={classNames(styles.button, {
          [styles.checked]: checked,
          [styles.disabled]: disabled,
        })}
        onClick={(e) => {
          if (!disabled) onChange();
          e.stopPropagation();
        }}
      >
        {checked && <CheckIcon />}
      </button>

      <input
        type="checkbox"
        id={String(id)}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        style={{ display: "none" }}
      />

      <label
        htmlFor={String(id)}
        aria-checked={checked}
        className={classNames(
          styles.label,
          styles[`label--type-${type}`],
          { [styles.disabled]: disabled }
        )}
      >
        {content}
      </label>
    </div>
  );
}
