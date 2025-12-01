import { useSuspenseQuery } from "@tanstack/react-query";
import { EMAIL } from "@/shared/constants/constants";
import { getFavoritesList } from "@/entities/api/get-favorites-list";
import { useSearchParams } from "react-router-dom";

export function useGetFavoriteList() {
  const [searchParams] = useSearchParams();

  const page = searchParams?.get("page") ?? "1";

  return useSuspenseQuery({
    queryKey: ["favorite", page],
    queryFn: () => getFavoritesList({ page, email: EMAIL }),
    retry:3
  });
}
