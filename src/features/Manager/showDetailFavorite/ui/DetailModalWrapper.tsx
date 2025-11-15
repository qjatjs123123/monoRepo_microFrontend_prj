import { useOverlay } from "@/shared/model/useOverlay";
import { ReactNode, Suspense } from "react";
import { DetailModal } from "./common/DetailModal";
import { DetailModalSkeleton } from "./common/DetailModalSkeleton";
import { DetailError } from "./common/DetailError";
import { ErrorBoundary } from "react-error-boundary";
import { Modal } from "@/shared/ui/Modal/Modal";
import { DetailLayout } from "./common/DetailLayout";

interface DetailModalWrapperProps {
  children: (show: () => void) => ReactNode;
  favoriteId: number;
}

export function DetailModalWrapper({
  children,
  favoriteId,
}: DetailModalWrapperProps) {
  const { open } = useOverlay();
  const showDetailModal = () =>
    open(() => (
      <Modal align="right">
        <DetailLayout>
          <ErrorBoundary
            fallbackRender={({ resetErrorBoundary }) => (
              <DetailError resetErrorBoundary={resetErrorBoundary} favoriteId={favoriteId}/>
            )}
          >
            <Suspense fallback={<DetailModalSkeleton />}>
              <DetailModal favoriteId={favoriteId} />
            </Suspense>
          </ErrorBoundary>
        </DetailLayout>
      </Modal>
    ));

  return <>{children(showDetailModal)}</>;
}
