'use client'

import { NextButton, PageButton, PrevButton, usePagination } from "@/features/Manager/paginationFavoriteCompany";

export function TablePagination() {
  console.log("pagenation")
  const { pageArray, currentPage, totalPage } = usePagination();
  return (
    <div className="flex items-center gap-2 justify-center mt-[50px] pb-[50px]">
      <PrevButton currentPage={currentPage} />
      {pageArray.map((page) => (
        <PageButton
          key={page}
          page={page}
          currentPage={currentPage}
        />
      ))}
      <NextButton currentPage={currentPage} totalPage={totalPage} />
    </div>
  )
}