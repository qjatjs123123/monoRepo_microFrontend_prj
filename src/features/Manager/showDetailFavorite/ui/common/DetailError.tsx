"use client";

import { useGetFavoriteDetail } from "@/entities/Manager/model/useGetFavoriteDetail";
import { Button } from "@/shared/ui/Button/Button";
import { ErrorMessage } from "@/shared/ui/Error/ErrorMessage";
import { Text } from "@/shared/ui/Text/Text";
import { useQueryClient } from "@tanstack/react-query";

interface DetailErrorProps {
  resetErrorBoundary: (...args: Array<unknown>) => void; 
  favoriteId: number
}

export function DetailError({ resetErrorBoundary, favoriteId }: DetailErrorProps) {
  const queryClient = useQueryClient();

  return (
    <ErrorMessage
      description={
        <div className="flex flex-col">
          <Text
            type="body"
            weight="bold"
            size="3"
            className="text-[var(--text-color-100)]"
          >
            서버에 잠깐 문제가 생겨
          </Text>
          <Text
            type="body"
            weight="bold"
            size="3"
            className="text-[var(--text-color-100)]"
          >
            관심기업 메모를 불러오지 못했어요
          </Text>
        </div>
      }
      button={
        <Button
          style="fill"
          onClick={() => {
            resetErrorBoundary();
            queryClient.removeQueries({
              queryKey: ["favorite-detail", favoriteId],
              exact: true,
            });
          }}
        >
          다시 시도하기
        </Button>
      }
    />
  );
}
