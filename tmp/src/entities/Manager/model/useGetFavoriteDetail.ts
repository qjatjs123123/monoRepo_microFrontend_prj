"use client";

import { useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import { EMAIL } from "@/shared/config/constants/constants";
import { getFavoriteDetail } from "../api/get-favorites-detail";

export function useGetFavoriteDetail(favoriteId: number) {
  const param = {
    favoriteId: favoriteId,
    email: EMAIL,
  };

  const result = useSuspenseQuery({
    queryKey: ["favorite-detail", favoriteId],
    queryFn: () => getFavoriteDetail(param),
    staleTime: 0,
  });

  return { ...result };
}
