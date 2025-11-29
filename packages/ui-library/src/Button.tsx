import classNames from "classnames";
import type { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  type?: "primary" | "default";
  style?: "fill" | "outline";
  size?: "big" | "medium";
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  disabled?: boolean;
  dataCypress?: string;
}>;

const baseClasses = `flex items-center border-none bg-backgroundDefault cursor-pointer`;

const typeClasses = {
  primary: `bg-primary text-[white] h-[300px]`,
  default: `bg-backgroundDefault`,
};

export function Button(props: Props) {
  const {
    type = "primary",
    style = "outline",
    size = "medium",
    disabled,
    children,
    className,
    dataCypress,
    ...rest
  } = props;

  return (
    <button
      type="button"
      data-cy={dataCypress}
      className={classNames(
        baseClasses,
        typeClasses[type],

      )}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}
