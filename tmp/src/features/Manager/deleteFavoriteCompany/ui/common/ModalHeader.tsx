import { useOverlay } from "@/shared/model/useOverlay";
import { Button } from "@/shared/ui/Button/Button";
import CloseBigIcon from "@/shared/ui/Icon/CloseBigIcon";

export function ModalHeader() {
  const { close } = useOverlay();
  return (
    <div className="w-full flex justify-end p-4">
      <Button className="!p-0 !border-0" onClick={close}>
        <CloseBigIcon />
      </Button>
    </div>
  );
}
