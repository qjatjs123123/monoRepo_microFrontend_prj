import { useOverlay } from "@/shared/model/useOverlay";
import { Button } from "@/shared/ui/Button/Button";
import { Text } from "@/shared/ui/Text/Text";

export function CancelButton() {
  const {close} = useOverlay();
  return (
    <Button
      style="outline"
      onClick={() => close()}
    >
      <Text>취소하기</Text>
    </Button>
  );
}
