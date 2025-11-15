import { useOverlay } from "@/shared/model/useOverlay";
import { ReactNode } from "react";
import { Modal } from "@/shared/ui/Modal/Modal";
import { UpdateModal } from "./common/UpdateModal";
import { UpdateLayout } from "./common/UpdateLayout";

interface UpdateModalWrapperProps {
  children: (show: () => void) => ReactNode;
  favoriteId: number;
}

export function UpdateModalEntry({
  children,
  favoriteId,
}: UpdateModalWrapperProps) {
  const { open } = useOverlay();

  const showUpdateModal = () =>
    open(() => (
      <Modal align="right">
        <UpdateLayout>
          <UpdateModal favoriteId={favoriteId} />
        </UpdateLayout>
      </Modal>
    ));

  return <>{children(showUpdateModal)}</>;
}
