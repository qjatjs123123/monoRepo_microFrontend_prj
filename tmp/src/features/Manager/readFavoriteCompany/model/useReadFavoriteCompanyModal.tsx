"use client"

import { useOverlay } from "@/shared/model/useOverlay";
import { Modal } from "@/shared/ui/Modal/Modal";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ModalError } from "../ui/ModalError";
import { ModalLayout } from "../ui/ModalLayout";
import { ModalSkeleton } from "../ui/ModalSkeleton";
import { ModalWrapper } from "../ui/ModalWrapper";

export function useReadFavoriteCompanyModal(favoriteId: number) {
  const { open } = useOverlay();

  const show = () =>
    open(() => (
      <Modal align="right">
        <ModalLayout>
          <ErrorBoundary
            fallbackRender={({ resetErrorBoundary }) => (
              <ModalError
                favoriteId={favoriteId}
                resetErrorBoundary={resetErrorBoundary}
              />
            )}
          >
            <Suspense fallback={<ModalSkeleton />}>
              <ModalWrapper favoriteId={favoriteId} />
            </Suspense>
          </ErrorBoundary>
        </ModalLayout>
      </Modal>
    ));

  return { show };
}
