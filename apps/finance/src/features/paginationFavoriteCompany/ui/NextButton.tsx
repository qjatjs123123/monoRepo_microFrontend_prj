import { RightIcon } from "@monorepo/ui";
import { useChangePageQuery } from "../model/useChangePageQuery";
import { Button } from "@monorepo/ui";
import { Text } from "@monorepo/ui";
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
      className={`px-2 py-1 rounded cursor-pointer !border-0 !bg-[transparent] sm:!flex !hidden ${
        currentPage === totalPage &&
        "!text-[var(--color-status-disable)] cursor-not-allowed "
      }`}
    >
      <Text>다음</Text>
      <RightIcon color={currentPage === totalPage ? "#cbd5e1" : "black"} />
    </Button>
  );
}
