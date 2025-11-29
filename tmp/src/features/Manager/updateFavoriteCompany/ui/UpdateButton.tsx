import { Button } from "@/shared/ui/Button/Button";
import { Text } from "@/shared/ui/Text/Text";
import { useUpdateFavoriteCompany } from "../model/useUpdateFavoriteCompany";

export function UpdateButton({favoriteId} : {favoriteId: number}) {
  const mutation = useUpdateFavoriteCompany();

  return (
    <Button
      style="fill"
      onClick={() => mutation.mutate(favoriteId)}
    >
      <Text>저장하기</Text>
    </Button>
  );
}
