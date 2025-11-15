import { PortalConsumer } from "@/app/providers/PortalProvider";
import styles from "./Modal.module.css";
import { ReactNode } from "react";
import classNames from "classnames";
import { useOverlay } from "@/shared/model/useOverlay";

export interface ModalProps {
  children: ReactNode;
  className?: string;
  align?: "left" | "center" | "right";
}

export function Modal({ children, className, align = "center" }: ModalProps) {
  const { close } = useOverlay();

  return (
    <PortalConsumer>
      <div
        className={classNames(
          styles[align],
          "fixed inset-0 bg-[var(--color-background-modal)]/60 backdrop-blur-[2px] z-15",
          className
        )}
        onClick={close}
      >
        {children}
      </div>
    </PortalConsumer>
  );
}
