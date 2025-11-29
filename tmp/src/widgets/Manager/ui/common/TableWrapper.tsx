"use client";
import { useGetFavoriteList } from "@/entities/Manager";
import { CheckProvider } from "@/features/Manager/checkFavoriteCompany";
import { TableTitle } from "./TableTitle";
import { Table } from "./Table";
import { Pagination } from "./Pagination";

export function TableWrapper() {
  const { data } = useGetFavoriteList();

  return (
    <>
      <CheckProvider data={data}>
        <TableTitle />
        <Table data={data} />
      </CheckProvider>
    </>
  );
}
