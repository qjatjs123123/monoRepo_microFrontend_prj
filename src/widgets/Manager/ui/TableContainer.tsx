import { CheckProvider } from "@/features/Manager/checkFavoriteCompany";
import { TableTitle } from "./common/TableTitle";
import { TableContent } from "./common/TableContent";
import { TablePagination } from "./common/TablePagination";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { prefetchFavoriteList } from "./model/prefetchFavoriteList";

interface SearchParamsProps {
  page: string;
}

export async function TableContainer({ page }: SearchParamsProps) {
  const { queryClient, data } = await prefetchFavoriteList({
    page,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CheckProvider data={data}>
        <TableTitle />
        <TableContent data={data} />
        <TablePagination />
      </CheckProvider>
    </HydrationBoundary>
  );
}
