import LeftIcon from "@/shared/ui/Icon/LeftIcon";
import { useChangePageQuery } from "../model/useChangePageQuery";
import { PagiNationProps } from "../model/pagination";

interface PrevButtonProps {
  currentPage: number;
}

export function PrevButton({ currentPage }: PrevButtonProps) {
  const changePageQuery = useChangePageQuery();

  return (
    <button
      disabled={currentPage === 1}
      onClick={() => changePageQuery(currentPage - 1)}
      className={`px-2 py-1 rounded cursor-pointer ${
        currentPage === 1 &&
        "text-[var(--color-status-disable)] cursor-not-allowed"
      }`}
    >
      <LeftIcon />
    </button>
  );
}
