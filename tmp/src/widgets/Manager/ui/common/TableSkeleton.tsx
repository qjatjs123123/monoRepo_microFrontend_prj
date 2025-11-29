"use client";

import React from "react";
import classNames from "classnames";
import { Table } from "@/shared/ui/Table/Table";

interface TableSkeletonProps {
  rowCount?: number;
  colCount?: number;
  className?: string;
}

export function TableSkeleton({
  rowCount = 5,
  colCount = 4,
  className,
}: TableSkeletonProps) {
  return (
    <div className={classNames("animate-pulse", className)}>
      {/* Table Title Skeleton */}
      <div className="flex flex-col md:flex-row justify-between md:items-end pt-[40px] pb-[20px] gap-6">
        <div className="flex flex-col gap-2">
          <div className="h-6 w-48 bg-gray-300 rounded"></div> {/* 제목 */}
          <div className="h-4 w-72 bg-gray-200 rounded"></div> {/* 설명 */}
        </div>

        <div className="flex justify-end items-end gap-6">
          <div className="h-10 w-24 bg-gray-300 rounded"></div>{" "}
          {/* CreateButton */}
          <div className="h-10 w-24 bg-gray-300 rounded"></div>{" "}
          {/* DeleteButton */}
        </div>
      </div>
      <Table>
        {/* Table Header Skeleton */}
        <Table.Header>
          <Table.HeaderRow>
            {Array.from({ length: colCount }).map((_, idx) => (
              <Table.Head key={idx}>
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              </Table.Head>
            ))}
          </Table.HeaderRow>
        </Table.Header>

        {/* Table Body Skeleton */}
        <Table.Body>
          {Array.from({ length: rowCount }).map((_, rowIdx) => (
            <Table.Row key={rowIdx}>
              {Array.from({ length: colCount }).map((_, colIdx) => (
                <Table.Cell key={colIdx}>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
