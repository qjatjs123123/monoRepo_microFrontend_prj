import RightIcon from "@/shared/ui/Icon/RightIcon";
import { useChangePageQuery } from "../model/useChangePageQuery";
import { Button } from "@/shared/ui/Button/Button";
import { Text } from "@/shared/ui/Text/Text";

interface NextButtonProps {
  currentPage: number;
  totalPage: number;
}

export function NextButton({ currentPage, totalPage }: NextButtonProps) {
  const changePageQuery = useChangePageQuery();

  return (
    <Button
      disabled={currentPage === totalPage}
      onClick={() => changePageQuery(currentPage + 1)}
      className={`px-2 py-1 rounded cursor-pointer !border-0 sm:!flex !hidden ${
        currentPage === totalPage &&
        "!text-[var(--color-status-disable)] cursor-not-allowed "
      }`}
    >
      <Text>다음</Text>
      <RightIcon color={currentPage === totalPage ? "#cbd5e1" : "black"} />
    </Button>
  );
}
