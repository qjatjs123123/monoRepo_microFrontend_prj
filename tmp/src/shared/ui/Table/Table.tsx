import React from "react";
import classNames from "classnames";
import styles from "./Table.module.css";
import {
  TableCellProps,
  TableHeaderRowProps,
  TableHeadProps,
  TableProps,
  TableRowProps,
} from "./type";

export function Table({ children, className }: TableProps) {
  return (
    <table
      className={classNames(
        "min-w-full border border-[var(--color-line-400)]  rounded-[8px] border-separate border-spacing-0 overflow-hidden",
        className
      )}
    >
      {children}
    </table>
  );
}

Table.Header = function TableHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return <thead className="bg-[#f3f4f6]">{children}</thead>;
};

Table.Body = function TableBody({ children }: { children: React.ReactNode }) {
  return (
    <tbody className="divide-y divide-[var(--color-line-400)]">
      {children}
    </tbody>
  );
};

Table.Row = function TableRow({
  children,
  checked = false,
  onClick,
}: TableRowProps) {
  return (
    <tr
      onClick={onClick}
      className={classNames(
        "hover:bg-gray-50 transition-colors  border border-[var(--color-line-400)] cursor-pointer",
        checked && styles.checked
      )}
    >
      {children}
    </tr>
  );
};

Table.HeaderRow = function TableHeaderRow({ children }: TableHeaderRowProps) {
  return <tr className="border-[var(--color-line-400)] border">{children}</tr>;
};

Table.Head = function TableHead({
  children,
  width,
  className,
}: TableHeadProps) {
  return (
    <th
      className={classNames(
        "py-3 text-left font-semibold text-gray-700 whitespace-nowrap",
        className
      )}
      style={{ width }}
    >
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
    <td className={styles.cell}>
      <div
        className={classNames(
          styles["cell-wrapper"],
          styles[`text--align-${align}`],
          className
        )}
      >
        {children}
      </div>
    </td>
  );
};
