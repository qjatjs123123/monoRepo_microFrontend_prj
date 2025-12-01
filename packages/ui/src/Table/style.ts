import { css, SerializedStyles } from "@emotion/react";

export const tableStyles: SerializedStyles = css`
  min-width: 100%;
  border-radius: 8px;
  border-spacing: 0;
  border-collapse: separate;
  border: 1px solid var(--color-line-400);
  overflow: hidden;
`;

export const tableHeaderStyles: SerializedStyles = css`
  background-color: #f3f4f6;
`;

export const tableBodyStyles: SerializedStyles = css`
  & > :not([hidden]) ~ :not([hidden]) {
    border-top: 1px solid var(--color-line-400);
  }
`;

export const tableRowStyles = (checked?: boolean): SerializedStyles => css`
  cursor: pointer;
  border: 1px solid var(--color-line-400);
  transition: background-color 0.2s;
  background-color: ${checked ? "var(--color-checked-300)" : "transparent"};

  &:hover {
    background-color: ${checked ? "var(--color-checked-300)" : "#f9fafb"};
  }
`;

export const tableHeaderRowStyles: SerializedStyles = css`
  border: 1px solid var(--color-line-400);
`;

export const tableHeadStyles = (width?: string): SerializedStyles => css`
  padding: 0.75rem 1rem;
  text-align: left;
  font-weight: 600;
  color: #374151;
  white-space: nowrap;
  width: ${width};
`;

export const tableCellStyles = (
  align: "left" | "center" | "right" = "left"
): SerializedStyles => css`
  display: flex;
  padding: 15px 0;
  justify-content: ${align === "center"
    ? "center"
    : align === "right"
    ? "flex-end"
    : "flex-start"};
  align-items: center;
`;
