import { LeftIcon } from "@monorepo/ui";
import { useChangePageQuery } from "../model/useChangePageQuery";
import { Button } from "@monorepo/ui";
import { Text } from "@monorepo/ui";

interface PrevButtonProps {
  currentPage: number;
}

export function PrevButton({ currentPage }: PrevButtonProps) {
  const changePageQuery = useChangePageQuery();

  return (
    <Button
      disabled={currentPage === 1}
      onClick={() => changePageQuery(currentPage - 1)}
      className={`px-2 py-1 rounded cursor-pointer !border-0 !bg-[transparent]  sm:!flex !hidden ${
        currentPage === 1 &&
        "!text-[var(--color-status-disable)] !cursor-not-allowed "
      }`}
    >
      <LeftIcon />
      <Text>이전</Text>
    </Button>
  );
}
