import { useOverlay } from "@/shared/model/useOverlay";
import { Button } from "@/shared/ui/Button/Button";
import { CloseIcon } from "@/shared/ui/Icon/CloseIcon";
import { Text } from "@/shared/ui/Text/Text";

export function ModalHeader() {
  const { close } = useOverlay();
  
  return (
    <div className="flex  justify-between px-4 py-4">
      <Text weight="bold">관심기업 생성</Text>
      <Button onClick={close} className="!p-0 !border-0">
        <CloseIcon />
      </Button>
    </div>
  );
}
