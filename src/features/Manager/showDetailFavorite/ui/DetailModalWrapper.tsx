import { useOverlay } from "@/shared/model/useOverlay";
import { ReactNode } from "react";
import { DetailModal } from "./DetailModal";

interface DetailModalWrapperProps {
  children: (show: () => void) => ReactNode;
  favoriteId: number
}

export function DetailModalWrapper({ children, favoriteId }: DetailModalWrapperProps) {
  const { open } = useOverlay();
  const showDetailModal = () =>
    open(() => <DetailModal favoriteId={favoriteId} />);

  return <>{children(showDetailModal)}</>;
}
