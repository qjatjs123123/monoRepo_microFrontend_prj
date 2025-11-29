"use client";
import { ErrorBoundary } from "react-error-boundary";
import { TableError } from "./common/TableError";
import { Suspense } from "react";
import { TableWrapper } from "./common/TableWrapper";
import { TableSkeleton } from "./common/TableSkeleton";

export function TableEntry({ page }: { page: string }) {
  return (
    <ErrorBoundary
      fallbackRender={({ resetErrorBoundary }) => (
        <TableError page={page} resetErrorBoundary={resetErrorBoundary} />
      )}
    >
      <Suspense fallback={<TableSkeleton />}>
        <TableWrapper />
      </Suspense>
    </ErrorBoundary>
  );
}
