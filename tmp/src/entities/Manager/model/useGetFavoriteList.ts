"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { EMAIL } from "@/shared/config/constants/constants";
import { getFavoritesList } from "@/entities/Manager";

export function useGetFavoriteList() {
  const searchParams = useSearchParams();

  const page = searchParams?.get("page") ?? "1";

  return useSuspenseQuery({
    queryKey: ["favorite", page],
    queryFn: () => getFavoritesList({ page, email: EMAIL }),
    retry:3
  });
}
