import { FavoriteCompanyList, getFavoritesList } from "@/entities/Manager";
import { QueryClient } from "@tanstack/react-query";
import { EMAIL } from "@/shared/config/constants/constants";

interface SearchParamsProps {
  page: string;
}

export async function prefetchFavoriteList({ page }: SearchParamsProps) {
  const queryClient = new QueryClient();
  const queryKey = ["favorite", page];

  await queryClient.prefetchQuery({
    queryKey,
    queryFn: () => getFavoritesList({ page, email: EMAIL }),
  });

  const data = queryClient.getQueryData<FavoriteCompanyList>(queryKey) as FavoriteCompanyList;

  return { data, queryClient };
}
