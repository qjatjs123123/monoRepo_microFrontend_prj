/** @jsxImportSource @emotion/react */
import React from "react";
import {
  TableProps,
  TableRowProps,
  TableHeaderRowProps,
  TableHeadProps,
  TableCellProps,
} from "./type";
import {
  tableStyles,
  tableHeaderStyles,
  tableBodyStyles,
  tableRowStyles,
  tableHeaderRowStyles,
  tableHeadStyles,
  tableCellStyles,
} from "./style";
import { css } from "@emotion/react";

export function Table({ children, className }: TableProps) {
  return (
    <table className={className} css={tableStyles}>
      {children}
    </table>
  );
}

Table.Header = function TableHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return <thead css={tableHeaderStyles}>{children}</thead>;
};

Table.Body = function TableBody({ children }: { children: React.ReactNode }) {
  return <tbody css={tableBodyStyles}>{children}</tbody>;
};

Table.Row = function TableRow({
  children,
  checked = false,
  onClick,
}: TableRowProps) {
  return (
    <tr onClick={onClick} css={tableRowStyles(checked)}>
      {children}
    </tr>
  );
};

Table.HeaderRow = function TableHeaderRow({ children }: TableHeaderRowProps) {
  return <tr css={tableHeaderRowStyles}>{children}</tr>;
};

Table.Head = function TableHead({
  children,
  width,
  className,
}: TableHeadProps) {
  return (
    <th className={className} css={tableHeadStyles(width)}>
      {children}
    </th>
  );
};

Table.Cell = function TableCell({
  children,
  align = "left",
  className,
}: TableCellProps) {
  return (
    <td
      css={css`
        border-top: 1px solid var(--color-line-400);
      `}
    >
      <div className={className} css={tableCellStyles(align)}>
        {children}
      </div>
    </td>
  );
};
