"use client";

import { useGetFavoriteList } from "@/entities/Manager";

import { PagiNationProps } from "./pagination";
import { dotPagination } from "../lib/dotPagination";

export function usePagination(): PagiNationProps {
  const { data } = useGetFavoriteList();
  const { page, total_pages } = data;
  const pageArray = dotPagination(page, total_pages);

  return { pageArray, currentPage: page, totalPage: total_pages };
}
