"use client";

import { useGetFavoriteList } from "@/entities/Manager";
import { useButtonCount } from "./useButtonCount";
import { PageArrType, PagiNationProps } from "./pagination";

export function usePagination(): PagiNationProps {
  const { data } = useGetFavoriteList();
  const { maxButton, sideButtonCount } = useButtonCount();
  const tmp = {page  : 10 , total_pages: 55}
  const { page, total_pages } = tmp;

  const pageArray: PageArrType[] = [];

  if (total_pages <= maxButton) {
    pageArray.push(...Array.from({ length: total_pages }, (_, i) => i + 1));
  } else {
    const left = Math.max(page - sideButtonCount, sideButtonCount);
    const right = Math.min(page + sideButtonCount, total_pages - 1);

    pageArray.push(1); 

    if (left > 2) pageArray.push("..."); 

    for (let i = left; i <= right; i++) {
      pageArray.push(i);
    }

    if (right < total_pages - 1) pageArray.push("..."); 

    pageArray.push(total_pages); 
  }

  return { pageArray, currentPage : page, totalPage: total_pages };
}
