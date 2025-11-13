"use client";

import { useGetFavoriteList } from "@/entities/Manager";

import { PagiNationProps } from "./pagination";
import { dotPagination } from '../lib/dotPagination';

export function usePagination(): PagiNationProps {
  const { data } = useGetFavoriteList();
  // const { maxButton, sideButtonCount } = useButtonCount();

  const { page, total_pages } = data;

  const pageArray = dotPagination(page, 55);

  return { pageArray, currentPage: page, totalPage: 55 };
}
