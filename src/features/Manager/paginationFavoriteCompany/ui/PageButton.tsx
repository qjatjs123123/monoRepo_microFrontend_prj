"use client";
import { Button } from "@/shared/ui/Button/Button";
import { PageArrType } from "../model/pagination";
import { useChangePageQuery } from "../model/useChangePageQuery";
import { EllipsisIcon } from "@/shared/ui/Icon/EllipsisIcon";

interface PageButtonProps {
  page: PageArrType;
  currentPage?: number;
}

export function PageButton({ page, currentPage }: PageButtonProps) {
  const isEllipsis = page === "...";

  return isEllipsis ? (
    <EllipsisButton page={page} />
  ) : (
    <NumberButton page={page} currentPage={currentPage} />
  );
}

function EllipsisButton({ page }: PageButtonProps) {
  return (
    <Button
      disabled
      data-cy={`pageNation${page}`}
      className={`px-3 py-1 rounded-full cursor-none !border-0`}
    >
      <EllipsisIcon />
    </Button>
  );
}

function NumberButton({ page, currentPage }: PageButtonProps) {
  const changePageQuery = useChangePageQuery();
  return (
    <Button
      data-cy={`pageNation${page}`}
      style={currentPage === page ? "fill" : "outline"}
      onClick={() => changePageQuery(Number(page))}
      className={`px-3 py-1 rounded-full cursor-pointer !border-0`}
    >
      {page}
    </Button>
  );
}
