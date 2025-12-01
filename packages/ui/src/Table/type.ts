import { ReactNode } from "react";

export interface TableProps {
  children: React.ReactNode;
  className?: string;
}

export type AlignType = "left" | "center" | "right";

export interface TableCellProps {
  children: React.ReactNode;
  align?: AlignType;
  className?: string;
  checked?: boolean;
}

export interface TableRowProps {
  children: React.ReactNode;
  checked?: boolean;
  onClick?: () => void; // 클릭 이벤트 추가
}

export interface TableHeadProps {
  children: ReactNode;
  width?: string;
  className?: string;
}

export interface TableHeaderRowProps {
  children: React.ReactNode;
}
