import RightIcon from "@/shared/ui/Icon/RightIcon";
import { useChangePageQuery } from "../model/useChangePageQuery";

interface NextButtonProps {
  currentPage: number;
  totalPage: number;
}

export function NextButton({ currentPage, totalPage }: NextButtonProps) {
  const changePageQuery = useChangePageQuery();

  return (
    <button
      disabled={currentPage === totalPage}
      onClick={() => changePageQuery(currentPage + 1)}
      className={`px-2 py-1 rounded cursor-pointer ${
        currentPage === totalPage &&
        "!text-[var(--color-status-disable)] cursor-not-allowed"
      }`}
    >
      <RightIcon color={currentPage === totalPage ? "#cbd5e1" : "black"} />
    </button>
  );
}
