import React from "react";
import classNames from "classnames";
import styles from "./Table.module.css";

interface TableProps {
  children: React.ReactNode;
  className?: string;
}

export function Table({ children, className }: TableProps) {
  return (
    <table
      className={classNames(
        "min-w-full border border-[var(--color-line-400)] border-collapse",
        className
      )}
      style={{ tableLayout: "fixed" }}
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

Table.Row = function TableRow({ children }: { children: React.ReactNode }) {
  return (
    <tr className="hover:bg-gray-50 transition-colors duration-150 border-[var(--color-line-400)] border">
      {children}
    </tr>
  );
};

Table.HeaderRow = function TableHeaderRow({ children }: { children: React.ReactNode }) {
  return <tr className="border-[var(--color-line-400)] border">{children}</tr>;
};

Table.Head = function TableHead({
  children,
  width,
  className,
}: {
  children: React.ReactNode;
  width?: string;
  className?: string;
}) {
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

type AlignType = "left" | "center" | "right";

interface TableCellProps {
  children: React.ReactNode;
  align?: AlignType;
  className?: string;
}

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
